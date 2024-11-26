const { Task } = require('../models');

const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: 'Task creation failed', error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Failed to fetch tasks', error: error.message });
  }
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    console.log('Current task:', task);
    console.log('Updated data:', { title, description, status });

    if (title && title !== task.title) task.title = title;
    if (description && description !== task.description)
      task.description = description;
    if (status && status !== task.status) task.status = status;
    
    console.log('Updated task:', task);
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res
      .status(500)
      .json({ message: 'Failed to update task', error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Failed to delete task', error: error.message });
  }
};

module.exports = { createTask, getTasks, editTask, deleteTask };
