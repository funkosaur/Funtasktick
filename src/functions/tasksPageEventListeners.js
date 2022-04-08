import { projects } from "./takingFormInfo.js";
import tasksPage from "../pages/tasksPage.js";
import createTasks from "./createTasks.js";

//REFACTOR THIS SHIT NOT TO CREATE THE INPUTS OVER AND OVER AGAIN WHEN YOU PRESS TO ADD A TASK

function showTaskInputs(currentProject) {
  addTaskButton.style.display = "none";

  const newTaskInput = document.createElement("input");
  newTaskInput.setAttribute("id", "newTaskInput");
  tasksButton.appendChild(newTaskInput);

  const newTaskDate = document.createElement("input");
  newTaskDate.type = "date";
  newTaskDate.setAttribute("id", "newTaskDate");
  tasksButton.appendChild(newTaskDate);

  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.setAttribute("id", "taskButtonsDiv");
  tasksButton.appendChild(taskButtonsDiv);

  const createTaskButton = document.createElement("button");
  createTaskButton.classList.add("taskButtons");
  createTaskButton.textContent = "ADD";
  taskButtonsDiv.appendChild(createTaskButton);

  createTaskButton.addEventListener("click", createTasks.bind(this, addTaskButton));

  const cancelTaskButton = document.createElement("button");
  cancelTaskButton.classList.add("taskButtons");
  cancelTaskButton.textContent = "CANCEL";
  taskButtonsDiv.appendChild(cancelTaskButton);

  cancelTaskButton.addEventListener("click", () => {
    newTaskInput.style.display = "none";
    newTaskDate.style.display = "none";
    taskButtonsDiv.style.display = "none";
    addTaskButton.style.display = "flex";
  });
  
}

export default showTaskInputs;
