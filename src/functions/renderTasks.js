import deleteItemsInDiv from "./deleteItemsInDiv.js";

function renderTasks(project) {

  project.tasks.forEach((currentTasks, index) => {
    const allTasks = document.createElement("li");
    allTasks.classList.add("tasks");
    allTasks.setAttribute("id", "allTasks");
    tasksList.appendChild(allTasks);

    const checkboxAndTextDiv = document.createElement("div");
    checkboxAndTextDiv.setAttribute("id", "checkboxAndTextDiv");
    allTasks.appendChild(checkboxAndTextDiv);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("id", `checkbox${index}`);
    checkBox.type = "checkbox";
    checkboxAndTextDiv.appendChild(checkBox);
    checkboxAndTextDiv.addEventListener("click", () => {
        console.log(checkBox.checked)
    })

    const taskText = document.createElement("label");
    taskText.setAttribute("id", "taskText");
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
    deleteButton.setAttribute("data-index", `${index}`);
    deleteButton.textContent = "X";
    dateAndDelete.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
      project.tasks.forEach((currentTask, index) => {
        if (index == e.target.dataset.index) {
          project.tasks.splice(index, 1);
          deleteItemsInDiv(tasksList);
          renderTasks(project);
        }
      });
    });
  });
}

export default renderTasks;
