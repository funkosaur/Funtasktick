import tasksPage from "../pages/tasksPage";
import { projects } from "../index.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import renderTasks from "./renderTasks.js";
import { linesThrough } from "./tasksPageEventListeners.js";
import mobileNavBarToggle from "./utility/hideMobileNavBar.js";

function projectDisplayEventHandler(event) {
  const contentDiv = document.querySelector("#content");

  deleteItemsInDiv(contentDiv);

  if (!event.target.matches("li")) return;
  const element = event.target;
  let dataIndex = element.dataset.index;
  let project = projects[dataIndex];

  tasksPage(project);

  renderTasks(project, linesThrough);
  mobileNavBarToggle();
}

export default projectDisplayEventHandler;
