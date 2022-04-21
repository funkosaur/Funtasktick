import './styles/style.css';
import formPage from "./pages/formPage.js";
import {frontPageEventListeners, getData} from "./functions/frontPageEventListeners.js";
import { takeFormInfo } from "./functions/takingFormInfo.js";
import { addProjectToNavlist } from "./functions/createProject.js";
import welcomePage from "./pages/welcomePage.js";


let projects = [];

(function() {
  let currentKey = JSON.parse(localStorage.getItem("storageProjects"));
    if(currentKey !== null) projects = currentKey
})();

welcomePage()
frontPageEventListeners()
addProjectToNavlist()
getData()

export {projects};

