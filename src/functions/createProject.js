import events from "./pubsub.js";
import { projects } from "./functions/takingFormInfo.js";

function createProjectElement() {
  const navigationDiv = document.querySelector("#leftNavigation");

  const projectNav = document.createElement("div");
  projectNav.setAttribute("id", "projectNav");
  projectNav.classList.add("navigationPanel");
  navigationDiv.appendChild(projectNav);

  projects.forEach((project) => {
    const projectsTabs = document.createElement("div");
    projectsTabs.classList.add("navigationPanel");
    projectNav.appendChild(projectsTabs);
  });
}
