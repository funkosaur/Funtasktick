import events from "./pubsub.js";
import checkFormRequirements from "./formRequirements.js";
import { projects } from "../index.js";

const takeFormInfo = () => {
  const projectFactory = (title, description, dueDate, priority, notes, tasks) => {
  return { title, description, dueDate, priority, notes, tasks};
};

function processFormInfo(event) {
  const projectTitle = document.querySelector("#projectTitle");
  const projectDescription = document.querySelector("#projectDescription");
  const projectDueDate = document.querySelector("#projectDueDate");
  const projectPriority = document.querySelector("#projectPriorityCheckbox1");
  const projectNotes = document.querySelector("#projectNotes");

  event.preventDefault();
  if(checkFormRequirements()) return;

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
}

const form = document.querySelector("#formContent");
form.addEventListener("submit", processFormInfo);

};

events.on("projectCreated", projectsChanged)

function projectsChanged() {
    let newProject= JSON.stringify(projects);
    localStorage.setItem("storageProjects", newProject);
}

export { takeFormInfo } ;

