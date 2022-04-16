import './styles/style.css';
import formPage from "./pages/formPage.js";
import frontPageEventListeners from "./functions/frontPageEventListeners.js";
import { takeFormInfo } from "./functions/takingFormInfo.js";
import { addProjectToNavlist } from "./functions/createProject.js";


let projects = [];

(function() {
  let currentKey = JSON.parse(localStorage.getItem("storageProjects"));
    if(currentKey !== null) projects = currentKey
})();

formPage()
frontPageEventListeners()

takeFormInfo()
addProjectToNavlist()

export {projects};

