import tasksPage from "../pages/tasksPage";
import { projects } from "../index.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import renderTasks from "./renderTasks.js";
import { linesThrough } from "./tasksPageEventListeners.js";

function projectEventHandler(e) {
  const contentDiv = document.querySelector("#content");

  deleteItemsInDiv(contentDiv);

  if (!e.target.matches("li")) return;
  const element = e.target;
  let dataIndex = element.dataset.index;
  let project = projects[dataIndex];

  tasksPage(project);

  renderTasks(project, linesThrough);
  if (window.screen.width < 1000) {
    leftNavigation.classList.toggle("leftNavTransform");
    leftNavigation.classList.toggle("leftNavTransformed");
  }
}

export default projectEventHandler;
