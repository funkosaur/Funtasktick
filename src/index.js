import './styles/style.css';
import formPage from "./pages/formPage.js";
import frontPageEventListeners from "./functions/frontPageEventListeners.js";
import { takeFormInfo } from "./functions/takingFormInfo.js";
import { addProjectToNavlist } from "./functions/createProject.js";


let projects = [];


formPage()
frontPageEventListeners()
window.addEventListener('load', () => {
    let currentKey = JSON.parse(localStorage.getItem("storageProjects"));
    if(currentKey !== null) projects = currentKey
  });
takeFormInfo()
addProjectToNavlist()

export {projects};

