import events from "./utility/pubsub.js";
import checkFormRequirements from "./formRequirements.js";
import { projects } from "../index.js";
import mobileNavBarToggle from "./utility/hideMobileNavBar.js";

const takeFormInfo = () => {
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

  const form = document.querySelector("#formContent");
  form.addEventListener("submit", processFormInfo);
};

events.on("projectCreated", projectsChanged);

function projectsChanged() {
  let newProject = JSON.stringify(projects);
  localStorage.setItem("storageProjects", newProject);
}

export { takeFormInfo };
