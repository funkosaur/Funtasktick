import {projects} from "../functions/takingFormInfo.js";
import showTaskInputs from "../functions/tasksPageEventListeners.js";

function tasksPage(project) {
    const contentDiv = document.querySelector("#content");
    
    const tasksLayout = document.createElement("div");
    tasksLayout.setAttribute("id", "tasksLayout");
    contentDiv.appendChild(tasksLayout);

    const projectInfo = document.createElement("div");
    projectInfo.setAttribute("id", "projectInfo");
    tasksLayout.appendChild(projectInfo);


    const projectTitle = document.createElement("div");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.textContent = `${project.title}`
    projectInfo.appendChild(projectTitle);

    const projectDescription = document.createElement("div");
    projectDescription.setAttribute("id", "projectDescription");
    projectDescription.textContent = `${project.description}`;
    projectInfo.appendChild(projectDescription);

    const projectDueDate = document.createElement("div");
    projectDueDate.setAttribute("id", "projectDueDate");
    projectDueDate.textContent = `Due: ${project.dueDate}`;
    projectInfo.appendChild(projectDueDate);

    const tasksDiv = document.createElement("div");
    tasksDiv.setAttribute("id", "tasksDiv");
    tasksLayout.appendChild(tasksDiv);

    const tasksList = document.createElement("ul");
    tasksList.setAttribute("id", "tasksList");
    tasksDiv.appendChild(tasksList);

    const tasksButton = document.createElement("div");
    tasksButton.classList.add("tasks");
    tasksButton.setAttribute("id", "tasksButton");
    tasksDiv.appendChild(tasksButton);

    const addTaskButton = document.createElement("div");
    addTaskButton.setAttribute("id", "addTaskButton");
    tasksButton.appendChild(addTaskButton);

    addTaskButton.addEventListener("click", showTaskInputs.bind(project));

    const plusSign = document.createElement("i");
    plusSign.classList.add("fas", "fa-plus");
    addTaskButton.appendChild(plusSign);

    const tasksButtonText = document.createElement("div");
    tasksButtonText.textContent = "Add Task"
    addTaskButton.appendChild(tasksButtonText);

    const notesDiv = document.createElement("div");
    notesDiv.setAttribute("id", "notesDiv");
    notesDiv.textContent = "NOTES"
    tasksLayout.appendChild(notesDiv);

    const notesArea = document.createElement("textarea");
    notesArea.setAttribute("id", "notesArea");
    notesArea.rows = 30;
    notesArea.cols = 35;
    notesArea.maxLength = 200;
    notesArea.textContent = project.notes;
    notesDiv.appendChild(notesArea);

    const noteSaveButton = document.createElement("button");
    noteSaveButton.setAttribute("id", "noteSaveButton");
    noteSaveButton.textContent = "Save";
    notesDiv.appendChild(noteSaveButton);

    return { project }
};

export default tasksPage;