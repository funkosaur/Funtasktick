import {projects} from "./takingFormInfo.js";
import tasksPage from "../pages/tasksPage.js";

function showTaskInputs(currentProject) {
    addTaskButton.style.display = "none";

        const newTaskInput = document.createElement("input");
        newTaskInput.setAttribute("id", "newTaskInput");
        tasksButton.appendChild(newTaskInput);

        const taskButtonsDiv = document.createElement("div");
        taskButtonsDiv.setAttribute("id", "taskButtonsDiv");
        tasksButton.appendChild(taskButtonsDiv);

        const createTaskButton = document.createElement("button");
        createTaskButton.classList.add("taskButtons")
        createTaskButton.textContent = "ADD";
        taskButtonsDiv.appendChild(createTaskButton);

        

        createTaskButton.addEventListener("click", () => {
            this.tasks.push(newTaskInput.value);

            while ( tasksList.firstChild ) tasksList.removeChild( tasksList.firstChild );

            this.tasks.forEach((task, index) => {
                const allTasks = document.createElement("li");
                allTasks.classList.add("tasks");
                allTasks.textContent = task;
                tasksList.appendChild(allTasks);
            });
            newTaskInput.style.display = "none";
            taskButtonsDiv.style.display = "none";
            addTaskButton.style.display = "flex";
        });

        const cancelTaskButton = document.createElement("button");
        cancelTaskButton.classList.add("taskButtons")
        cancelTaskButton.textContent = "CANCEL";
        taskButtonsDiv.appendChild(cancelTaskButton);

        cancelTaskButton.addEventListener("click", () => {
            newTaskInput.style.display = "none";
            taskButtonsDiv.style.display = "none";
            addTaskButton.style.display = "flex";
        });
}

export default showTaskInputs;