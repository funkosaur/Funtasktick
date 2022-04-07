import formPage from "../pages/formPage.js"

const frontPageEventListeners = () => {
    const contentDiv = document.querySelector("#content");

    const addNewProjectButton = document.querySelector("#addNewProject");
    addNewProjectButton.addEventListener("click", () => {
        while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
        formPage()
    });

};

export default frontPageEventListeners