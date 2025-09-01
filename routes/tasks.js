const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Add a new task to a specific project
router.post('/', async (req, res) => {
  try {
    const newTask = new Task({ ...req.body, projectId: req.params.projectId });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Retrieve all tasks for a specific project
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
