const Member = require('../models').Member;
const bcrypt = require('bcrypt-nodejs');
//const Validation = require('../helpers/validations').Validation;

function isAValidMemberId(memberId){
    
    var memberIdStr = String(memberId).toLowerCase();
    var memberIdStrSize = memberIdStr.length;
    var memberIdFirstChar = memberIdStr.charAt(0);

    //All student or professor ids have 9 characters and start with 'A' or 'L'
    return memberIdStrSize == 9 && (memberIdFirstChar == 'a' || memberIdFirstChar == 'l');
}

function isAValidDepartment_Major(department_major){

    //TODO: implement this function to validate against the department_major enum
    return true;
}

module.exports = {

    create(req, res) {

        if(!req.body.id)
            return res.status(400).send({message: 'The attribute id must match the format of a student or professor id: 9 characters long and starting with a letter A or L'});

        if(!req.body.department_major)
            return res.status(400).send({message: 'The attribute department_major is invalid. It must match a value in the enum.'});

        if(!req.body.name)
            return res.status(400).send({message: 'The attribute name cannot be null or empty.'});

        if(!req.body.password)
            return res.status(400).send({message: 'The attribute password cannot be null or empty.'});

        bcrypt.hash(req.body.password, null, null, (err, hash) => {
            let hashed = hash;
            
            return Member 
                .create({
                    id: String(req.body.id).toLowerCase(), //Store this as lower case
                    department_major: req.body.department_major,
                    name: req.body.name,
                    photo_URL: req.body.photo_URL,
                    password: hashed,
                    system_role: 'user'
                })
                .then(member => res.status(201).send(member))
                .catch(error => res.status(400).send(error));
        });
    },

    list(req, res) {

        return Member
            .all()
            .then(members => res.status(200).send(members))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {

        return Member
            .findById(req.params.memberId, {

                include: [{

                    model: Member,
                    as: 'members',
                }],
            })
            .then(member => {

                if(!member) {

                    return res.status(404).send({

                        message: 'Member Not Found',
                    });
                }

                return res.status(200).send(member);
            })
            .catch(error => res.status(404).send(error));
    },

    update(req, res){

        if(!req.body.department_major || !isAValidDepartment_Major(req.body.department_major))
            return res.status(400).send({message: 'The attribute department_major is invalid. It must match a value in the enum.'});

        return Member
            .findById(req.params.id, {

                include: [{

                    model: Member,
                    as: 'member',
                }],
            })
            .then(member => {

                if(!member) {

                    return res.status(404).send({

                        message: 'Member Not Found',
                    });
                }

                return member
                    .update({

                        department_major: req.body.department_major || member.deparment_major,
                        name: req.body.name || member.name,
                        photo_URL: req.body.photo_URL || member.photo_URL,
                        password: req.body.password || member.password,
                    })
                    .then(() => res.status(200).send(member)) // Send back the updated member
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {

        return Member
            .findById(req.params.memberId)
            .then(member => {

                if(!member) {

                    return res.status(400).send({

                        message: 'Member Not Found',
                    });
                }

                return member
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(404).send(error));
    }
};