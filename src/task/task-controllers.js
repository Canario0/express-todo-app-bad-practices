const getTasks = (repository) => {
  return (req, res) => {
    return res.json({ data: repository.findAll(), status: "success" });
  };
};

const createTask = (repository) => {
  return (req, res) => {
    if (!req.body.id) {
      throw Error("Missing id!");
    }
    repository.create({
      id: req.body.id, // change id by uuid so the front end can handle the creation
      value: req.body.value,
      done: false,
    });
    return res.json({ data: repository.findAll(), status: "success" });
  };
};

const deleteTask = (repository) => {
  return (req, res) => {
    repository.delete(req.params.id);
    return res.json({ data: repository.findAll(), status: "success" });
  };
};

const updateTask = (repository) => {
  return (req, res) => {
    repository.update({
      id: req.params.id ?? req.body.id, // change id by uuid so the front end can handle the creation
      done: req.body.done,
    });
    return res.json({ data: repository.findAll(), status: "success" });
  };
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
