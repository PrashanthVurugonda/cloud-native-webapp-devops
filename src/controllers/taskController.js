const taskService = require("../services/taskService");
const asyncHandler = require("../utils/asyncHandler");

const createTask = asyncHandler(async (req, res) => {
  const created = await taskService.createTask(req.body);
  res.status(201).json(created);
});

const listTasks = asyncHandler(async (_req, res) => {
  const tasks = await taskService.getTasks();
  res.status(200).json(tasks);
});

const getTask = asyncHandler(async (req, res) => {
  const task = await taskService.getTaskById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  const updated = await taskService.updateTask(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.status(200).json(updated);
});

const deleteTask = asyncHandler(async (req, res) => {
  const deleted = await taskService.deleteTask(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.status(204).send();
});

module.exports = {
  createTask,
  listTasks,
  getTask,
  updateTask,
  deleteTask,
};
