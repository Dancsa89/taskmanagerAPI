const express = require('express');
const tasks = express();
const models = require('../models');

// Index

tasks.get('/', (req, res) => {
  models.Task.findAll().then(tasks => {
    res.json(tasks);
  });
});

// Show

tasks.get('/:id', (req, res) => {
  models.Task.findById(req.params.id).then(task => {
    if (!task) {
      res.status(400).send('Nem létező rekord!');
    } else {
      res.json(task);
    }
  });
});

// Post

tasks.post('/', (req, res) => {
  models.Task.create({
    name: req.body.name,
    message: req.body.message
  }).then(result => {
    res.redirect('tasks');
  });
});

tasks.put('/:id', (req, res) => {
  models.Task.update({
    name: req.body.name,
    message: req.body.message
  },
  {
    where: { id: req.params.id }
  }).then(result => {
    res.redirect(`/tasks/${req.params.id}`);
  });
});

tasks.delete('/:id', (req, res) => {
  models.Task.destroy({ where: { id: req.params.id } }).then(task => {
    res.redirect(task);
  });
});

module.exports = tasks;
