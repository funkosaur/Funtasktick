import { projects } from "../index.js";
import {todaysTasks} from "./frontPageEventListeners.js"

function showTaskInputs() {
  addTaskButton.style.display = "none";
  newTaskInput.style.display = "block";
    newTaskDate.style.display = "block";
    taskButtonsDiv.style.display = "flex";
}

function linesThrough() {
  const projectLayout = document.querySelector("#tasksLayout");
  let dataIndex = projectLayout.dataset.index;
  let project = projects[dataIndex];
  project.tasks.forEach((task, index) => {
    const dueDateTask = document.querySelector(`#dueDateTask${index}`);
    const checkBox = document.querySelector(`#checkbox${index}`);
    task.done = checkBox.checked
      if(task.done == true){
        dueDateTask.style.textDecoration = "line-through";
        dueDateTask.style.color = "#b3b3b3";
      }else {
        dueDateTask.style.textDecoration = "";
        dueDateTask.style.color = "black";
      }
  });
    
}

function globalLinesThrough() {
  todaysTasks.tasks.forEach((task, index) => {
    const dueDateTask = document.querySelector(`#dueDateTask${index}`);
    const checkBox = document.querySelector(`#checkbox${index}`);
    task.done = checkBox.checked
      if(task.done == true){
        dueDateTask.style.textDecoration = "line-through";
        dueDateTask.style.color = "#b3b3b3";
      }else {
        dueDateTask.style.textDecoration = "";
        dueDateTask.style.color = "black";
      }
  });
}



export { showTaskInputs, linesThrough, globalLinesThrough };
