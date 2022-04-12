import formPage from "../pages/formPage.js";
import {takeFormInfo, projects} from "./takingFormInfo.js";
import deleteItemsInDiv from "./deleteItemsInDiv.js";

const frontPageEventListeners = () => {
    const contentDiv = document.querySelector("#content");

    const addNewProjectButton = document.querySelector("#addNewProject");
    addNewProjectButton.addEventListener("click", () => {
        deleteItemsInDiv(contentDiv)
        formPage()
        takeFormInfo()
        
    });

};

export default frontPageEventListeners