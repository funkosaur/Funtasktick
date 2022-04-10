const renderTasks = () => {
//staj go ova na add new project pa nazad i koa kje deletnesh task
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



};