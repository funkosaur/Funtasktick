
const taskFactory = (task, dueDate) => {
  return { task, dueDate };
};

function createTasks() {
    const newTaskInput = document.querySelector("#newTaskInput");
    const newTaskDate = document.querySelector("#newTaskDate");

  const newTask = taskFactory(newTaskInput.value, newTaskDate.value);

  this.tasks.push(newTask);

  while (tasksList.firstChild) tasksList.removeChild(tasksList.firstChild);

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
    deleteButton.setAttribute("data-index", `${index}`)
    deleteButton.textContent = "X";
    dateAndDelete.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
        this.tasks.forEach((currentTask, index) => { 
            if(index == e.target.dataset.index){
                this.tasks.splice(index, 1);
                console.log(this)
            }

        })

    })
  });

  const taskButtonsDiv = document.querySelector("#taskButtonsDiv");
    const addTaskButton = document.querySelector("#addTaskButton");

    newTaskInput.style.display = "none";
    newTaskDate.style.display = "none";
    taskButtonsDiv.style.display = "none";
    addTaskButton.style.display = "flex"
}

export default createTasks;
