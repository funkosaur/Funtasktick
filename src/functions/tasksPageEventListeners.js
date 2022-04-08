import {projects} from "./takingFormInfo.js";
import tasksPage from "../pages/tasksPage.js";

const taskFactory = (task, dueDate) => {
    return { task, dueDate };
  };

function showTaskInputs(currentProject) {
    addTaskButton.style.display = "none";

        const newTaskInput = document.createElement("input");
        newTaskInput.setAttribute("id", "newTaskInput");
        tasksButton.appendChild(newTaskInput);
        
        const newTaskDate = document.createElement("input");
        newTaskDate.type = "date";
        newTaskDate.setAttribute("id", "newTaskDate");
        tasksButton.appendChild(newTaskDate);

        const taskButtonsDiv = document.createElement("div");
        taskButtonsDiv.setAttribute("id", "taskButtonsDiv");
        tasksButton.appendChild(taskButtonsDiv);

        const createTaskButton = document.createElement("button");
        createTaskButton.classList.add("taskButtons")
        createTaskButton.textContent = "ADD";
        taskButtonsDiv.appendChild(createTaskButton);

        

        createTaskButton.addEventListener("click", () => {
            const newTask = taskFactory(newTaskInput.value, newTaskDate.value);
            this.tasks.push(newTask);

            while ( tasksList.firstChild ) tasksList.removeChild( tasksList.firstChild );

            this.tasks.forEach((currentTasks, index) => {
                const allTasks = document.createElement("li");
                allTasks.classList.add("tasks");
                allTasks.setAttribute("id", "allTasks");
                tasksList.appendChild(allTasks);

                const checkboxAndTextDiv = document.createElement("div");
                checkboxAndTextDiv.setAttribute("id", "checkboxAndTextDiv");
                allTasks.appendChild(checkboxAndTextDiv);

                const outerCheckBox = document.createElement("div");
                outerCheckBox.classList.add("outer");
                checkboxAndTextDiv.appendChild(outerCheckBox);

                const checkBox = document.createElement("input");
                checkBox.setAttribute("id", `checkbox${index}`);
                checkBox.type = "checkbox";
                outerCheckBox.appendChild(checkBox);

                const checkBoxLabel = document.createElement("label");
                checkBoxLabel.setAttribute("for", `checkbox${index}`);
                checkBoxLabel.classList.add("inner");
                outerCheckBox.appendChild(checkBoxLabel);

                const taskText = document.createElement("p");
                taskText.setAttribute("id", "taskText")
                taskText.textContent = currentTasks.task;
                checkboxAndTextDiv.appendChild(taskText);

                const dateAndDelete = document.createElement("div");
                dateAndDelete.setAttribute("id", "dateAndDelete");
                allTasks.appendChild(dateAndDelete);


                const dueDateTask = document.createElement("div");
                dueDateTask.setAttribute("id", "dueDateTask");
                dueDateTask.textContent = `Due: ${currentTasks.dueDate}`;
                dateAndDelete.appendChild(dueDateTask);

                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", "deleteButton");
                deleteButton.textContent = "X";
                dateAndDelete.appendChild(deleteButton);
            });
            newTaskInput.style.display = "none";
            newTaskDate.style.display = "none";
            taskButtonsDiv.style.display = "none";
            addTaskButton.style.display = "flex";
        });

        const cancelTaskButton = document.createElement("button");
        cancelTaskButton.classList.add("taskButtons")
        cancelTaskButton.textContent = "CANCEL";
        taskButtonsDiv.appendChild(cancelTaskButton);

        cancelTaskButton.addEventListener("click", () => {
            newTaskInput.style.display = "none";
            newTaskDate.style.display = "none";
            taskButtonsDiv.style.display = "none";
            addTaskButton.style.display = "flex";
        });
}

export default showTaskInputs;