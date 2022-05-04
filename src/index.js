import './styles/style.css';
import { getData } from "./functions/frontPageEventListeners.js";
import { addProjectToNavlist } from "./functions/createProject.js";
import welcomePage from "./pages/welcomePage.js";


let projects = [];

(function() {
  let currentKey = JSON.parse(localStorage.getItem("storageProjects"));
    if(currentKey !== null) projects = currentKey
})();

welcomePage()
addProjectToNavlist()
getData()

export {projects};

