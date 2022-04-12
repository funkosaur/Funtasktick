import events from "./pubsub.js";
import { projects } from "./takingFormInfo.js";
import projectEventHandler from "./projectEventHandler.js";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import deleteItemsInDiv from "./deleteItemsInDiv.js";

const addProjectToNavlist = () => {

const projectNav = document.querySelector("#projectNav");

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


projectNav.addEventListener("click", projectEventHandler);

events.on("projectCreated", createProjectElement);

};

export default addProjectToNavlist
