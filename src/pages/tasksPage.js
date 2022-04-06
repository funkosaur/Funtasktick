import {projects} from "../functions/takingFormInfo.js";

function tasksPage(project) {
    const contentDiv = document.querySelector("#content");
    
    const tasksLayout = document.createElement("div");
    tasksLayout.setAttribute("id", "tasksLayout");
    contentDiv.appendChild(tasksLayout);

    const projectTitle = document.createElement("div");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.textContent = `${project.title}`
    tasksLayout.appendChild(projectTitle);

    const projectDescription = document.createElement("div");
    projectDescription.setAttribute("id", "projectDescription");
    projectDescription.textContent = `${project.description}`;
    tasksLayout.appendChild(projectDescription);

    const projectDueDate = document.createElement("div");
    projectDueDate.setAttribute("id", "projectDueDate");
    projectDueDate.textContent = `${project.dueDate}`;
    tasksLayout.appendChild(projectDueDate)


};

export default tasksPage;