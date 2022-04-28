const express = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("./task-controllers");
const { TaskRepository } = require("./task-repository");

const routes = express.Router();
// === store == //
var todoItems = [];
todoItems.push({
  id: "7414f12d-d13e-4dd4-b100-df897bf21047",
  value: "learn react",
  done: false,
});
todoItems.push({
  id: "40b79137-277f-4a2c-ac09-0ec61535b80b",
  value: "Go shopping",
  done: true,
});
todoItems.push({
  id: "40b79137-277f-4a2c-ac09-0ec61535b80b",
  value: "buy flowers",
  done: true,
});
const repository = new TaskRepository(todoItems);

// get all tasks
routes
  .route("/")
  .get(getTasks(repository))
  // create a task
  .post(createTask(repository));

routes
  .route("/:id")
  // delete a task
  .delete(deleteTask(repository))
  // update a task
  .patch(updateTask(repository));

module.exports = {
  taskRoutes: routes,
};
