class TaskRepository {
  todoItems;

  constructor(todoItems) {
    this.todoItems = todoItems;
  }

  findAll() {
    return this.todoItems;
  }

  findById(id) {
    return this.findAll().find((d) => d.id === id);
  }

  create(task) {
    if (this.findById(task.id)) {
      throw new Error(`Id ${task.id} already in use`);
    }
    this.todoItems.push(task);
  }
  update(task) {
    const dbTask = this.findById(task.id);
    if (!dbTask) {
      throw new Error(`Task not found with id: ${task.id}`);
    }
    dbTask.done = task.done;
  }
  delete(id) {
    let index = this.todoItems.findIndex((d) => d.id != id);
    if (index !== -1) {
      this.todoItems.splice(index, 1);
    }
  }
}

module.exports = {
  TaskRepository,
};
