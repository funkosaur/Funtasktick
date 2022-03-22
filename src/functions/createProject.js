import events from "./pubsub.js";
import { projects } from "./takingFormInfo.js";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const addProjectToNavlist = () => {

function createProjectElement() {
  const projectNav = document.querySelector("#projectNav")
  
  while ( projectNav.firstChild ) projectNav.removeChild( projectNav.firstChild );

  projects.forEach((project, index) => {
    const projectsTabs = document.createElement("div");
    projectsTabs.classList.add("navigationPanel");
    projectsTabs.setAttribute("data-index", `${index}`);
    let projectDueDate = format(parseISO(project.dueDate), `dd/MMMM`);
    projectsTabs.textContent = `${project.title} Due: ${projectDueDate}`;
    projectNav.appendChild(projectsTabs);
  });
}

events.on("projectCreated", createProjectElement);

};

export default addProjectToNavlist
