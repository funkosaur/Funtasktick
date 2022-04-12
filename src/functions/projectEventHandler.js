import tasksPage from "../pages/tasksPage";
import { projects } from "../functions/takingFormInfo.js";
import deleteItemsInDiv from "./deleteItemsInDiv.js";
import renderTasks from "./renderTasks.js";

function projectEventHandler(e) {
  const contentDiv = document.querySelector("#content");

  deleteItemsInDiv(contentDiv)

  if (!e.target.matches("li")) return;
  const element = e.target;
  let dataIndex = element.dataset.index;
  let project = projects[dataIndex];

  tasksPage(project);

  renderTasks(project);
}

export default projectEventHandler;
