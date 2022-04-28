const express = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("./task-controllers");

const routes = express.Router();
// === store == //
var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "buy flowers", done: true });
var index = 5;

// get all tasks
routes
  .route("/")
  .get(getTasks(todoItems))
  // create a task
  .post(createTask(todoItems, index));

routes
  .route("/:id")
  // delete a task
  .delete(deleteTask(todoItems))
  // update a task
  .patch(updateTask(todoItems));

module.exports = {
  taskRoutes: routes,
};
