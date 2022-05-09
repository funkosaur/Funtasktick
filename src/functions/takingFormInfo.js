import events from "./utility/pubsub.js";
import checkFormRequirements from "./formRequirements.js";
import { projects } from "../index.js";
import mobileNavBarToggle from "./utility/hideMobileNavBar.js";
import storageAvailable from "./utility/checkForLocalStorage.js";

const projectFactory = (
  title,
  description,
  dueDate,
  priority,
  notes,
  tasks
) => {
  return { title, description, dueDate, priority, notes, tasks };
};

function takeFormInfo() {
  const form = document.querySelector("#formContent");
  form.addEventListener("submit", processFormInfo);
}

// Makes a new project from all form inputs and pushes it to the main
// projects array
function processFormInfo(event) {
  const projectTitle = document.querySelector("#formProjectTitle");
  const projectDescription = document.querySelector(
    "#formProjectDescription"
  );
  const projectDueDate = document.querySelector("#formProjectDueDate");
  const projectPriority = document.querySelector("#projectPriorityCheckbox1");
  const projectNotes = document.querySelector("#formProjectNotes");

  event.preventDefault();
  if (checkFormRequirements()) return;

  const newProject = projectFactory(
    projectTitle.value.toUpperCase(),
    projectDescription.value,
    projectDueDate.value,
    projectPriority.checked,
    projectNotes.value,
    []
  );

  projects.push(newProject);
  events.emit("projectCreated", projects);
  this.reset();
  mobileNavBarToggle();
}

events.on("projectCreated", projectsChanged);

// Creates and updates the projects array in localStorage
function projectsChanged() {
  if (storageAvailable("localStorage") === true) {
    let newProject = JSON.stringify(projects);
    localStorage.setItem("storageProjects", newProject);
  }
}

export { takeFormInfo };
