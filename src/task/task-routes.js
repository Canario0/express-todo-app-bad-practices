const express = require("express");

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
  .get((req, res) => {
    return res.json({ data: todoItems, status: "success" });
  })
  // create a task
  .post((req, res) => {
    todoItems.push({
      index: index++,
      value: req.body.value,
      done: false,
    });
    return res.json({ data: todoItems, status: "success" });
  });

routes
  .route("/:id")
  // delete a task
  .delete((req, res) => {
    var todoItems = todoItems.filter((d) => d.index != +req.params.id);
    return res.json({ data: todoItems, status: "success" });
  })
  // update a task
  .patch((req, res) => {
    todoItems.filter((d) => d.index == +req.params.id)[0].done = req.body.done;
    return res.json({ data: todoItems, status: "success" });
  });

module.exports = {
  taskRoutes: routes,
};
