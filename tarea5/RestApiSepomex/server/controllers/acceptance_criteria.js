const Acceptance_criteria = require('../models').Acceptance_criteria;

module.exports = {
    create(req, res) {

        if(!req.body.name){
            return res.status(400).send({message: 'The post body must contain a valid name field.'});
        }

        if(!req.body.type){
            return res.status(400).send({message: 'The post body must contain a valid type field.'});
        }

        if(!req.body.user_story_id){
            return res.status(400).send({message: 'The post body must contain a valid user_story_id field.'});
        }

        return Acceptance_criteria
            .create({
                name: req.body.name,
                type: req.body.type,
                user_story_id: req.params.user_story_id,
            })
            .then(acceptance_criteria => res.status(200).send(acceptance_criteria))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Acceptance_criteria
            .findAll({
                include: [{
                    model: User_story,
                    as: 'user_story'
                }],
            })
            .then(acceptance_criteria => res.status(200).send(acceptance_criteria))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        // check that id is not null, undefined, not an integer or 0
        if(!req.params.id || !Numbers.isInteger(req.params.id)) { 
            return res.status(400).send({message: 'The request must contain the parameter id field.'});
        }

        return Acceptance_criteria
            .findById(req.params.id, {
                include: [{
                    model: User_story,
                    as: 'user_story'
                }],
            })
            .then(acceptance_criteria => {
                if(!acceptance_criteria) {
                    return res.status(400).send({ message: 'Acceptance criterium not found.'});
                }
                return res.status(200).send(acceptance_criteria);
            })
            .catch(error => res.status(400).send(error));
    },
  
    update(req, res) {

        if(!req.body.name){
            return res.status(400).send({message: 'The post body must contain a valid name field.'});
        }

        if(!req.body.type){
            return res.status(400).send({message: 'The post body must contain a valid type field.'});
        }

        if(!req.body.user_story_id){
            return res.status(400).send({message: 'The post body must contain a valid user_story_id field.'});
        }

        if(!Numbers.isInteger(req.body.user_story_id)){
            return res.status(400).send({message: 'The user story id must be an integer'});
        }

        return Acceptance_criteria
        .findById(req.params.id)
        .then(acceptance_criteria => {
            if (!acceptance_criteria) {
                return res.status(400).send({
                    message: 'Acceptance Criteria Not Found',
                });
            }
    
            return Acceptance_criteria
                .update({
                    name: req.body.name,
                    type: req.body.type,
                    user_story_id: req.body.user_story_id,
                })
                .then(updatedAcceptance_criteria => res.status(200).send(updatedAcceptance_criteria))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
    
    destroy(req, res) {
        return Acceptance_criteria
        .findById(req.params.id)
        .then(acceptance_criteria => {
            if (!acceptance_criteria) {
                return res.status(400).send({
                    message: 'Acceptance Criteria Not Found',
                });
            }
    
            return acceptance_criteria
            .destroy()
            .then(() => res.status(200).send())
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
  
};
