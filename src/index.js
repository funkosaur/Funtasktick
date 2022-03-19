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

projectTitle.addEventListener("click", ()=>{console.log("asdasfasd")})


console.log(submitButton)
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("sdfsf")
    
});
