import events from "./pubsub.js";
import checkFormRequirements from "./formRequirements.js"

const projects = [];

const takeFormInfo = () => {
  const projectFactory = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes };
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
    projectPriority.value,
    projectNotes.value
  );

  projects.push(newProject);
  events.emit("projectCreated", projects);
  this.reset();
  console.log(projects);
}

const form = document.querySelector("#formContent");
form.addEventListener("submit", processFormInfo);

};

export { takeFormInfo, projects } ;

