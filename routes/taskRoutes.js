const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  editTask,
  deleteTask,
} = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

module.exports = router;
