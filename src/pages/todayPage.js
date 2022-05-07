import deleteItemsInDiv from "../functions/utility/deleteItemsInDiv";

const contentDiv = document.querySelector("#content");

function todaysPage(todaysProject) {

    deleteItemsInDiv(contentDiv)

    const todayLayout = document.createElement("div");
    todayLayout.setAttribute("id", "todayLayout");
    contentDiv.appendChild(todayLayout);

    const todayTitleDiv = document.createElement("div");
    todayTitleDiv.setAttribute("id", "todayTitleDiv");
    todayTitleDiv.textContent = "Today's Tasks";
    todayLayout.appendChild(todayTitleDiv);

    const tasksDiv = document.createElement("div");
    tasksDiv.setAttribute("id", "todayTasksDiv");
    todayLayout.appendChild(tasksDiv);

    const tasksList = document.createElement("ul");
    tasksList.setAttribute("id", "tasksList");
    tasksDiv.appendChild(tasksList);
    


}

export default todaysPage;