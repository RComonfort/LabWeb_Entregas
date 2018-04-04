const project_technology = require('../models').Project_technology;

module.exports = {
  create(req, res) {

    if (!req.body.technology_id || !Numbers.isInteger(req.body.technology_id))
      return res.status(400).send({message: 'The post body must contain a valid technology_id field.'});

    if (!req.body.project_id || !Numbers.isInteger(res.body.project_id))
      return res.status(400).send({message: 'The post body must contain a valid project_id field.'});

    if (!req.body.version)
        return res.status(400).send({message: 'The post body must contain a valid version field.'});

    return project_technology
      .create({
        technology_id: req.body.technology_id,
        project_id: req.body.project_id,
        version: req.body.version
      })
      .then(project_technology => res.status(200).send(project_technology))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return project_technology
      .findAll( {
      })
      .then(project_technology => res.status(200).send(project_technology))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {

    if (!req.params.id || !Numbers.isInteger(req.params.id))
      return res.status(400).send({message: 'The post body must contain a valid id field.'});

    return project_technology
      .findById(req.params.id, {
      })
      .then(project_technology => {
        if (!project_technology) {
          return res.status(400).send({
            message: 'Project_technology not found',
          });
        }
        return res.status(200).send(project_technology);
      })
      .catch(error => res.status(400).send(project_technology));
  },
  update(req, res) {

    if (!req.body.technology_id || !Numbers.isInteger(req.body.technology_id))
      return res.status(400).send({message: 'The post body must contain a valid technology_id field.'});

    if (!req.body.project_id || !Numbers.isInteger(req.body.project_id))
      return res.status(400).send({message: 'The post body must contain a valid project_id field.'});

    if (!req.body.version)
      return res.status(400).send({message: 'The post body must contain a valid version field.'});

    return project_technology
      .findById(req.params.id, {
      })
      .then(project_technology => {
        if (!project_technology) {
          return res.status(400).send({
            message: 'Project_technology not found',
          });
        }
        return project_technology
          .update({
            technology_id: req.body.technology_id,
            project_id: req.body.project_id,
            version: req.body.version
          })
          .then(() => res.status(200).send(project_technology))  // Send back the updated tuple.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {

    if (!req.params.id || !Numbers.isInteger(req.params.id))
      return res.status(400).send({message: 'The post body must contain a valid id field.'});

    return project_technology
      .findById(req.params.id)
      .then(project_technology => {
        if (!project_technology) {
          return res.status(400).send({
            message: 'Project_technology not found',
          });
        }
        return project_technology
          .destroy()
          .then(() => res.status(200).send({message: 'Project_technology deleted.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};