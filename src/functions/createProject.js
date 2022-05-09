import events from "./utility/pubsub.js";
import { projects } from "../index.js";
import projectDisplayEventHandler from "./projectEventHandler.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";

function addProjectToNavlist() {
  const projectNav = document.querySelector("#projectNav");

  createProjectElement();

  projectNav.addEventListener("click", projectDisplayEventHandler);

  events.on("projectCreated", createProjectElement);
}

// Fills projectNav div with all current projects
function createProjectElement() {
  deleteItemsInDiv(projectNav);

  projects.forEach((project, index) => {
    const projectsTabs = document.createElement("li");
    projectsTabs.classList.add("navigationPanelProjects");
    projectsTabs.setAttribute("data-index", `${index}`);
    projectsTabs.textContent = `${project.title}`;
    projectNav.appendChild(projectsTabs);
    if (project.priority == true) {
      const priorityFlag = document.createElement("i");
      priorityFlag.classList.add("fas");
      priorityFlag.classList.add("fa-flag");
      projectsTabs.appendChild(priorityFlag);
      projectsTabs.classList.add("priorityProject")
    }
  });
}

export { addProjectToNavlist, createProjectElement };
