import {todaysTasks} from "../functions/frontPageEventListeners.js"
import deleteItemsInDiv from "../functions/utility/deleteItemsInDiv";

const contentDiv = document.querySelector("#content");

function thisWeeksPage(todaysProject) {

    deleteItemsInDiv(contentDiv)

    const todayLayout = document.createElement("div");
    todayLayout.setAttribute("id", "thisWeekLayout");
    contentDiv.appendChild(todayLayout);

    const todayTitleDiv = document.createElement("div");
    todayTitleDiv.setAttribute("id", "thisWeekTitleDiv");
    todayTitleDiv.textContent = "This Week's Tasks";
    todayLayout.appendChild(todayTitleDiv);

    const tasksDiv = document.createElement("div");
    tasksDiv.setAttribute("id", "tasksDiv");
    todayLayout.appendChild(tasksDiv);

    const tasksList = document.createElement("ul");
    tasksList.setAttribute("id", "tasksList");
    tasksDiv.appendChild(tasksList);
    


}

export default thisWeeksPage;