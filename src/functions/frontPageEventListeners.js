import formPage from "../pages/formPage.js";
import {takeFormInfo, projects} from "./takingFormInfo.js";

const frontPageEventListeners = () => {
    const contentDiv = document.querySelector("#content");

    const addNewProjectButton = document.querySelector("#addNewProject");
    addNewProjectButton.addEventListener("click", () => {
        while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
        formPage()
        takeFormInfo()
        
    });

};

export default frontPageEventListeners