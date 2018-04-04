const Sprint = require('../models').Sprint;

module.exports = {
    create(req, res) {
        if(!req.body.days){ 
            return res.status(400).send({message: 'Days attribute can not be an empty field.'});
        }

        return Sprint
            .create({
                days: req.body.days,
                comment: req.body.comment
            })
            .then(sprint => res.status(200).send(sprint))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {

        return Sprint
        .all()
        .then(sprints => res.status(200).send(sprints))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {

        // check that log_id is not null, undefined, not an integer or 0
        if(!req.body.id || !Numbers.isInteger(req.body.id)) { 
            return res.status(400).send({message: 'ID attribute can not be an empty field.'});
        }

        return Sprint
            .findById(req.params.sprint_id, {})
            .then(sprint => {
                if(!sprint) {
                    return res.status(404).send({ message: 'Sprint not found.'});
                }
                return res.status(200).send(sprint);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {

        if (!req.params.id || !Numbers.isInteger(req.params.id))
            return res.status(400).send({message: 'ID attribute can not be an empty field.'});

        if (!req.body.days || !Numbers.isInteger(req.params.days))
          return res.status(400).send({message: 'Days attribute must be a valid field.'});

        return Sprint
            .findById(req.params.id, {})
            .then(sprints => {
                if (!sprints) {
                    return res.status(400).send({
                    message: 'Sprint not found',
                  });
                }

                return Sprint
                    .update({
                        days: req.body.days,
                        comment: req.body.comment,
                    })

                    .then(() => res.status(200).send(sprints))
                    .catch((error) => res.status(400).send(error));
            })

            .catch((error) => res.status(400).send(error));
    },
    
    destroy(req, res) {

        return Sprint
            .findById(req.params.id)
            .then(sprints => {
                if (!sprints) {
                    return res.status(400).send({
                    message: 'Sprint not found.',
                    });
                }
                
                return Sprint
                  .destroy()
                  .then(() => res.status(200).send({message: 'Sprint deleted successfully.'}))
                  .catch(error => res.status(400).send(error));
            })
            
        .catch(error => res.status(400).send(error));
    },
};