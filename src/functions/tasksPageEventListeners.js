import { projects } from "./takingFormInfo.js";
import tasksPage from "../pages/tasksPage.js";
import createTasks from "./createTasks.js";


function showTaskInputs(currentProject) {
  addTaskButton.style.display = "none";
  newTaskInput.style.display = "block";
    newTaskDate.style.display = "block";
    taskButtonsDiv.style.display = "flex";
}

export default showTaskInputs;
