import tasksPage from "../pages/tasksPage";
import { projects } from "../functions/takingFormInfo.js";

function projectEventHandler(e) {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

  if (!e.target.matches("li")) return;
  const element = e.target;
  let dataIndex = element.dataset.index;
  let project = projects[dataIndex];

  tasksPage(project);
  
  const tasksList = document.querySelector("#tasksList");

  project.tasks.forEach((task) => {
    const allTasks = document.createElement("li");
    allTasks.classList.add("tasks");
    allTasks.textContent = task;
    tasksList.appendChild(allTasks);
  });
}

export default projectEventHandler;
