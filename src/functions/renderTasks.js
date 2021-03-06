import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { linesThrough } from "./tasksPageEventListeners.js";
import events from "./utility/pubsub.js";
import { projects } from "../index.js";

// Renders all tasks from a given project and a linesThrough function for
// rendering the tasks as done or not done
function renderTasks(project, linesFunction) {
  project.tasks.forEach((currentTasks, index) => {
    const allTasks = document.createElement("li");
    allTasks.setAttribute("data-index", `${index}`);
    allTasks.classList.add("tasks");
    allTasks.setAttribute("id", "allTasks");
    tasksList.appendChild(allTasks);

    const checkboxAndTextDiv = document.createElement("div");
    checkboxAndTextDiv.setAttribute("id", "checkboxAndTextDiv");
    allTasks.appendChild(checkboxAndTextDiv);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("id", `checkbox${index}`);
    checkBox.setAttribute("data-index", `${index}`);
    checkBox.type = "checkbox";
    checkboxAndTextDiv.appendChild(checkBox);
    checkBox.checked = currentTasks.done;

    checkboxAndTextDiv.addEventListener("click", linesFunction);

    const taskText = document.createElement("label");
    taskText.setAttribute("id", "taskText");
    taskText.setAttribute("for", `checkbox${index}`);
    taskText.textContent = currentTasks.task;
    checkboxAndTextDiv.appendChild(taskText);

    const dateAndDelete = document.createElement("div");
    dateAndDelete.setAttribute("id", "dateAndDelete");
    allTasks.appendChild(dateAndDelete);

    const dueDateTask = document.createElement("div");
    dueDateTask.setAttribute("id", `dueDateTask${index}`);
    if (currentTasks.dueDate == "") {
      dueDateTask.textContent = "";
    } else {
      let taskDueDate = format(parseISO(currentTasks.dueDate), `E dd MMM`);
      dueDateTask.textContent = `${taskDueDate}`;
    }
    dateAndDelete.appendChild(dueDateTask);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.setAttribute("data-index", `${index}`);
    deleteButton.textContent = "X";
    dateAndDelete.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
      project.tasks.forEach((currentTask, index) => {
        if (index == e.target.dataset.index) {
          project.tasks.splice(index, 1);
          deleteItemsInDiv(tasksList);
          renderTasks(project, linesThrough);
        }
      });
    });
  });
  linesFunction();
  events.emit("projectCreated", projects);
}

export default renderTasks;
