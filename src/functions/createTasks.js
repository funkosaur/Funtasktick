import renderTasks from "./renderTasks.js";
import deleteItemsInDiv from "./deleteItemsInDiv.js";

const taskFactory = (task, dueDate) => {
  return { task, dueDate };
};

function createTasks() {
  const newTaskInput = document.querySelector("#newTaskInput");
  const newTaskDate = document.querySelector("#newTaskDate");
  const taskButtonsDiv = document.querySelector("#taskButtonsDiv");
  const addTaskButton = document.querySelector("#addTaskButton");

  const newTask = taskFactory(newTaskInput.value, newTaskDate.value);

  this.tasks.push(newTask);

  deleteItemsInDiv(tasksList);

  renderTasks(this);

  newTaskInput.style.display = "none";
  newTaskInput.value = "";
  newTaskDate.style.display = "none";
  newTaskDate.value = "";
  taskButtonsDiv.style.display = "none";
  addTaskButton.style.display = "flex";
}

export default createTasks;
