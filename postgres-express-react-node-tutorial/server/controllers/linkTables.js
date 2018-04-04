const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
const LinkTable = require('../models').LinkTable;

module.exports = {
  create(req, res) {
    return LinkTable
      .create({
		todoItemId: req.body.todoItemId,
		todoId: req.body.todoId,
      })
      .then(linkTable => res.status(201).send(linkTable))
      .catch(error => res.status(400).send(error));
  },
  list (req, res){
    return LinkTable
      .findAll({
        include: [{
          model: LinkTable,
          as: 'linkTables',
         }],
      })
      .then (linkTables => res.status(200).send (linkTables))
      .catch (error => res.status (400).send(error));
  },
};