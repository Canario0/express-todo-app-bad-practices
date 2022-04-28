const getTasks = (todoItems) => {
  return (req, res) => {
    return res.json({ data: todoItems, status: "success" });
  };
};

const createTask = (todoItems, index) => {
  return (req, res) => {
    todoItems.push({
      index: index++,
      value: req.body.value,
      done: false,
    });
    return res.json({ data: todoItems, status: "success" });
  };
};

const deleteTask = (todoItems) => {
  return (req, res) => {
    todoItems = todoItems.filter((d) => d.index != Number(req.params.id));
    return res.json({ data: todoItems, status: "success" });
  };
};

const updateTask = (todoItems) => {
  return (req, res) => {
    todoItems.filter((d) => d.index == Number(req.params.id))[0].done =
      req.body.done;
    return res.json({ data: todoItems, status: "success" });
  };
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
