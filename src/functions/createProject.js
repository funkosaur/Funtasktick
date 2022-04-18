import events from "./utility/pubsub.js";
import { projects } from "../index.js";
import projectEventHandler from "./projectEventHandler.js";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";

function createProjectElement() {
  
  deleteItemsInDiv(projectNav)

  projects.forEach((project, index) => {
    const projectsTabs = document.createElement("li");
    projectsTabs.classList.add("navigationPanelProjects");
    projectsTabs.setAttribute("data-index", `${index}`);
    let projectDue = format(parseISO(project.dueDate), `dd/MMMM`);
    projectsTabs.textContent = `${project.title} Due: ${projectDue}`;
    projectNav.appendChild(projectsTabs);
  });
}

const addProjectToNavlist = () => {

const projectNav = document.querySelector("#projectNav");

createProjectElement()

projectNav.addEventListener("click", projectEventHandler);

events.on("projectCreated", createProjectElement);


};

export { addProjectToNavlist };
