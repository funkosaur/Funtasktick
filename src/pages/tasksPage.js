import {showTaskInputs} from "../functions/tasksPageEventListeners.js";
import createTasks from "../functions/createTasks.js";
import { projects } from "../index.js";
import events from "../functions/pubsub.js";

function tasksPage(project) {

  const contentDiv = document.querySelector("#content");

  const tasksLayout = document.createElement("div");
  tasksLayout.setAttribute("id", "tasksLayout");
  tasksLayout.setAttribute("data-index", `${projects.indexOf(project)}`);
  contentDiv.appendChild(tasksLayout);

  const projectInfo = document.createElement("div");
  projectInfo.setAttribute("id", "projectInfo");
  tasksLayout.appendChild(projectInfo);

  const projectTitle = document.createElement("div");
  projectTitle.setAttribute("id", "projectTitle");
  projectTitle.textContent = `${project.title}`;
  projectInfo.appendChild(projectTitle);

  const projectDescription = document.createElement("div");
  projectDescription.setAttribute("id", "projectDescription");
  projectDescription.textContent = `${project.description}`;
  projectInfo.appendChild(projectDescription);

  const projectDueDate = document.createElement("div");
  projectDueDate.setAttribute("id", "projectDueDate");
  projectDueDate.textContent = `Due: ${project.dueDate}`;
  projectInfo.appendChild(projectDueDate);

  const tasksDiv = document.createElement("div");
  tasksDiv.setAttribute("id", "tasksDiv");
  tasksLayout.appendChild(tasksDiv);

  const tasksList = document.createElement("ul");
  tasksList.setAttribute("id", "tasksList");
  tasksDiv.appendChild(tasksList);

  const tasksButton = document.createElement("div");
  tasksButton.classList.add("tasks");
  tasksButton.setAttribute("id", "tasksButton");
  tasksDiv.appendChild(tasksButton);

  const addTaskButton = document.createElement("div");
  addTaskButton.setAttribute("id", "addTaskButton");
  tasksButton.appendChild(addTaskButton);

  addTaskButton.addEventListener("click", showTaskInputs);

  const plusSign = document.createElement("i");
  plusSign.classList.add("fas", "fa-plus");
  addTaskButton.appendChild(plusSign);

  const tasksButtonText = document.createElement("div");
  tasksButtonText.textContent = "Add Task";
  addTaskButton.appendChild(tasksButtonText);

  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("id", "inputContainer");
  tasksButton.appendChild(inputContainer);

  const newTaskInput = document.createElement("input");
  newTaskInput.setAttribute("id", "newTaskInput");
  inputContainer.appendChild(newTaskInput);

  const newTaskDate = document.createElement("input");
  newTaskDate.type = "date";
  newTaskDate.setAttribute("id", "newTaskDate");
  inputContainer.appendChild(newTaskDate);

  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.setAttribute("id", "taskButtonsDiv");
  tasksButton.appendChild(taskButtonsDiv);

  const createTaskButton = document.createElement("button");
  createTaskButton.classList.add("taskButtons");
  createTaskButton.setAttribute("id", "createTaskButton");
  createTaskButton.textContent = "ADD";
  taskButtonsDiv.appendChild(createTaskButton);

  const cancelTaskButton = document.createElement("button");
  cancelTaskButton.setAttribute("id", "cancelTaskButton");
  cancelTaskButton.classList.add("taskButtons");
  cancelTaskButton.textContent = "CANCEL";
  taskButtonsDiv.appendChild(cancelTaskButton);

  createTaskButton.addEventListener("click", createTasks.bind(project));

  cancelTaskButton.addEventListener("click", () => {
    newTaskInput.style.display = "none";
    newTaskInput.value = "";
    newTaskDate.value = "";
    newTaskDate.style.display = "none";
    taskButtonsDiv.style.display = "none";
    addTaskButton.style.display = "flex";
  });

  const notesDiv = document.createElement("div");
  notesDiv.setAttribute("id", "notesDiv");
  notesDiv.textContent = "NOTES";
  tasksLayout.appendChild(notesDiv);

  const notesArea = document.createElement("textarea");
  notesArea.setAttribute("id", "notesArea");
  notesArea.rows = 30;
  notesArea.cols = 35;
  notesArea.maxLength = 200;
  notesArea.textContent = project.notes;
  notesDiv.appendChild(notesArea);

  const noteSaveButton = document.createElement("button");
  noteSaveButton.setAttribute("id", "noteSaveButton");
  noteSaveButton.textContent = "Save";
  notesDiv.appendChild(noteSaveButton);

  noteSaveButton.addEventListener("click", () => {
    project.notes = notesArea.value
    events.emit("projectCreated", projects);
  })

  return { project };
}

export default tasksPage;
