import renderTasks from "./renderTasks.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import {projects} from "../index.js"
import events from "./utility/pubsub.js";

const taskFactory = (task, dueDate, done) => {
  return { task, dueDate, done};
};

function createTasks() {
  const newTaskInput = document.querySelector("#newTaskInput");
  const newTaskDate = document.querySelector("#newTaskDate");
  const taskButtonsDiv = document.querySelector("#taskButtonsDiv");
  const addTaskButton = document.querySelector("#addTaskButton");

  const newTask = taskFactory(newTaskInput.value, newTaskDate.value, false);

  this.tasks.push(newTask);

  deleteItemsInDiv(tasksList);

  renderTasks(this);


  newTaskInput.style.display = "none";
  newTaskInput.value = "";
  newTaskDate.style.display = "none";
  newTaskDate.value = "";
  taskButtonsDiv.style.display = "none";
  addTaskButton.style.display = "flex";
  
  events.emit("projectCreated", projects);
}

export default createTasks;
