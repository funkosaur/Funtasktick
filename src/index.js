import "./styles/style.css";
import { getTasksDataForSearching } from "./functions/frontPageEventListeners.js";
import { addProjectToNavlist } from "./functions/createProject.js";
import welcomePage from "./pages/welcomePage.js";
import storageAvailable from "./functions/utility/checkForLocalStorage.js";

let projects = [];

(function () {
  if (storageAvailable("localStorage") === true) {
    let currentKey = JSON.parse(localStorage.getItem("storageProjects"));
    if (currentKey !== null) projects = currentKey;
  }
})();

welcomePage();
addProjectToNavlist();
getTasksDataForSearching();

export { projects };
