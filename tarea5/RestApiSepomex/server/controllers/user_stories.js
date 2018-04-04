const user_stories = require('../models').User_story;

module.exports = {
  create(req, res) {

    if (!req.body.weight)
      return res.status(400).send({message: 'weight attribute can not be empty.'});

    if (!req.body.scrum_board_status)
      return res.status(400).send({message: 'scrum_board_status attribute can not be empty.'});

    if (!req.body.description)
      return res.status(400).send({message: 'description attribute can not be empty.'});

    if (!req.body.priority)
      return res.status(400).send({message: 'priority attribute can not be empty.'});

    if (!req.body.sprint_id)
      return res.status(400).send({message: 'sprint_id attribute can not be empty.'});

    if (!req.body.project_id)
      return res.status(400).send({message: 'project_id attribute can not be empty.'});


    return user_stories
      .create({
        weight: req.body.weight,
        scrum_board_status: req.body.scrum_board_status,
        description: req.body.description,
        priority: req.body.priority,
        sprint_id: req.params.sprint_id,
        project_id: req.params.project_id,
      })
      .then(user_stories => res.status(200).send(user_stories))
      .catch(error => res.status(400).send(error));
  },
  listWithSprint(req, res) {
    return user_stories
            .findAll({
                include: [{
                    model: Sprint,
                    as: 'Sprint'
                }],
            })
            .then(user_stories => res.status(200).send(user_stories))
            .catch(error => res.status(400).send(error));
  },
  listWithProject(req, res) {
    return user_stories
            .findAll({
                include: [{
                    model: Project,
                    as: 'Project'
                }],
            })
            .then(user_stories => res.status(200).send(user_stories))
            .catch(error => res.status(400).send(error));
  },
  retrieveWithSprint(req, res){
    // check that id is not null, undefined, not an integer nor 0
     if(!req.params.id || !Numbers.isInteger(res.params.id)) { 
            return res.status(400).send({message: 'The request must contain the parameter id field.'});
          }

    return user_stories
      .findById(req.params.id, {
        include: [{
          model: Sprint,
          as: 'Sprint'
        }],
      })
      .then(user_stories => {
        if (!user_stories) {
          return res.status(400).send({
            message: 'User_story not found',
          });
        }
        return res.status(200).send(user_stories);
      })
      .catch(error => res.status(400).send(user_stories));
  },
  retrieveWithProject(req, res){
    // check that id is not null, undefined, not an integer nor 0
     if(!req.params.id || !Numbers.isInteger(res.params.id)) { 
            return res.status(400).send({message: 'The request must contain the parameter id field.'});
          }
                
    return user_stories
      .findById(req.params.id, {
        include: [{
          model: Project,
          as: 'Project'
        }],
      })
      .then(user_stories => {
        if (!user_stories) {
          return res.status(400).send({
            message: 'User_story not found',
          });
        }
        return res.status(200).send(user_stories);
      })
      .catch(error => res.status(400).send(user_stories));
  },
  update(req, res) {

    if (!req.params.id || !Numbers.isInteger(res.params.id))
      return res.status(400).send({message: 'attribute id can not be empty and must be an integer.'});

    if (!req.body.weight)
      return res.status(400).send({message: 'weight attribute can not be empty.'});

    if (!req.body.scrum_board_status)
      return res.status(400).send({message: 'scrum_board_status attribute can not be empty.'});

    if (!req.body.description)
      return res.status(400).send({message: 'description attribute can not be empty.'});

    if (!req.body.priority)
      return res.status(400).send({message: 'priority attribute can not be empty.'});

    if (!req.body.sprint_id || !Numbers.isInteger(res.body.sprint_id))
      return res.status(400).send({message: 'sprint_id attribute can not be empty and must be an integer.'});

    if (!req.body.project_id || !Numbers.isInteger(res.body.project_id))
      return res.status(400).send({message: 'project_id attribute can not be empty and must be an integer.'});


    return user_stories
      .findById(req.params.id, {
      })
      .then(user_stories => {
        if (!user_stories) {
          return res.status(400).send({
            message: 'User_story not found',
          });
        }
        return user_stories
          .update({
            weight: req.body.weight,
            scrum_board_status: req.body.scrum_board_status,
            description: req.body.description,
            priority: req.body.priority,
            sprint_id: req.params.sprint_id,
            project_id: req.params.project_id,
          })
          .then(() => res.status(200).send(user_stories))  // Send back the updated tuple.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return user_stories
      .findById(req.params.id)
      .then(user_stories => {
        if (!user_stories) {
          return res.status(400).send({
            message: 'User Story not found',
          });
        }
        return user_stories
          .destroy()
          .then(() => res.status(200).send({message: 'Successful Delete YAY!.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};