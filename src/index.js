import './styles/style.css';
import formPage from "./pages/formPage.js";


formPage()

const submitButton = document.querySelector("#submitButton");
const projectTitle = document.querySelector("#projectTitle");
const projectDescription = document.querySelector("#projectDescription");
const projectDueDate = document.querySelector("#projectDueDate");
const projectPriority = document.querySelector("#projectPriorityCheckbox1");
const projectNotes = document.querySelector("#projectNotes")
const projects = [];

const projectFactory = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes}
}

function processFormInfo(e) {
    e.preventDefault();
    const newProject = projectFactory(projectTitle.value, projectDescription.value, projectDueDate.value, projectPriority.value, projectNotes.value)
    projects.push(newProject);
    this.reset()
    console.log(projects)
}

submitButton.addEventListener("submit", processFormInfo);
