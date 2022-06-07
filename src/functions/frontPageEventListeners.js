import formPage from "../pages/formPage.js";
import { takeFormInfo } from "./takingFormInfo.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import { projects } from "../index.js";
import events from "./utility/pubsub.js";
import tasksPage from "../pages/tasksPage.js";
import { startOfWeek, endOfWeek } from "date-fns";
import renderTasks from "./renderTasks.js";
import todaysPage from "../pages/todayPage.js";
import { linesThrough, globalLinesThrough } from "./tasksPageEventListeners.js";
import thisWeeksPage from "../pages/thisWeekPage.js";
import mobileNavBarToggle from "./utility/hideMobileNavBar.js";
import welcomePage from "../pages/welcomePage.js";

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const searchIcon = document.querySelector("#searchIcon");
const contentDiv = document.querySelector("#content");
const todayDiv = document.querySelector("#todayDiv");
const thisWeekDiv = document.querySelector("#thisWeekDiv");
const menuButton = document.querySelector("#leftMenu");
const addNewProjectButton = document.querySelector("#addNewProject");
const logoDiv = document.querySelector("#logoDiv");

let tasksFromProjects = [];
let allTasks = [];
let todaysTasks = { tasks: [] };
let thisWeeksTasks = { tasks: [] };

thisWeekDiv.addEventListener("click", renderThisWeeksTasks);

// Renders all tasks from the thisWeeksTasks array
function renderThisWeeksTasks() {
  getThisWeeksTasks();
  thisWeeksPage();
  if (thisWeeksTasks.tasks.length == 0) {
    const tasksList = document.querySelector("#tasksList");
    tasksList.textContent = "No tasks to be done this week. :)";
    tasksList.style.fontSize = "1.8em";
    tasksList.style.display = "flex";
    tasksList.style.justifyContent = "center";
  } else {
    renderTasks(thisWeeksTasks, globalLinesThrough.bind(thisWeeksTasks));
    const deleteBtn = document.querySelectorAll("#deleteButton");
    deleteBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    const dateAndDelete = document.querySelectorAll("#dateAndDelete");
    dateAndDelete.forEach((box) => (box.style.justifyContent = "flex-end"));
  }
  mobileNavBarToggle();
}

// Pushes all tasks dated in this week into the WeeksTasks array
function getThisWeeksTasks() {
  thisWeeksTasks.tasks = [];
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      let today = new Date();
      let start = startOfWeek(today, { weekStartsOn: 2 })
        .toISOString()
        .slice(0, 10);
      let end = endOfWeek(today, { weekStartsOn: 1 })
        .toISOString()
        .slice(0, 10);
      if (task.dueDate > start && task.dueDate < end)
        thisWeeksTasks.tasks.push(task);
    });
  });
}

todayDiv.addEventListener("click", renderTodaysTasks);

// Renders all tasks from the todaysTasks array
function renderTodaysTasks() {
  getTodaysTasks();

  todaysPage();

  if (todaysTasks.tasks.length == 0) {
    const tasksList = document.querySelector("#tasksList");
    tasksList.textContent = "No tasks to be done today. :)";
    tasksList.style.fontSize = "1.8em";
    tasksList.style.display = "flex";
    tasksList.style.justifyContent = "center";
  } else {
    renderTasks(todaysTasks, globalLinesThrough.bind(todaysTasks));
    const deleteBtn = document.querySelectorAll("#deleteButton");
    deleteBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    const dateAndDelete = document.querySelectorAll("#dateAndDelete");
    dateAndDelete.forEach((box) => (box.style.justifyContent = "flex-end"));
  }
  mobileNavBarToggle();
}

// Pushes all tasks dated today into the todayTasks array
function getTodaysTasks() {
  todaysTasks.tasks = [];

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      let today = new Date().toISOString().slice(0, 10);

      if (task.dueDate == today) todaysTasks.tasks.push(task);
    });
  });
}

// Display searched term tasks
searchInput.addEventListener("input", (event) => {
  userCardContainer.style.display = "block";
  const searchTerm = event.target.value.toLowerCase();
  allTasks.forEach((task) => {
    const isVisible = task.taskText.includes(searchTerm);
    task.element.classList.toggle("hidden", !isVisible);
  });
  if (searchTerm.length < 1) userCardContainer.style.display = "none";
});

// Renders searched term origin project
searchIcon.addEventListener("click", searchInputValueForTasks);

function searchInputValueForTasks() {
  const searchValue = searchInput.value.toLowerCase();
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (task.task == searchValue) {
        deleteItemsInDiv(contentDiv);
        tasksPage(project);
        renderTasks(project, linesThrough);
        searchInput.value = "";
        userCardContainer.style.display = "none";
      }
    });
  });
}

// Hides or reveals the mobile project navBar
menuButton.addEventListener("click", mobileNavBarToggle);

contentDiv.addEventListener("click", () => {
  if (window.screen.width < 1000) {
    if (leftNavigation.classList == "leftNavTransform") {
      leftNavigation.classList.remove("leftNavTransform");
      leftNavigation.classList.add("leftNavTransformed");
    }
  }
});

logoDiv.addEventListener("click", welcomePage)

// Renders the form page
addNewProjectButton.addEventListener("click", () => {
  deleteItemsInDiv(contentDiv);
  formPage();
  takeFormInfo();
});

// Updates all subscirbers to any projects changes
events.on("projectCreated", getTasksDataForSearching);

// Generates tasks based on search term
function getTasksDataForSearching() {
  updateTasksArray();

  allTasks = [];

  deleteItemsInDiv(userCardContainer);

  allTasks = tasksFromProjects.map((task) => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    card.textContent = task.task;
    card.addEventListener("click", () => {
      searchInput.value = task.task.toUpperCase();
      searchIcon.click();
    });

    userCardContainer.append(card);

    return { taskText: task.task, element: card };
  });
}

// Updates all subscirbers to any projects changes
events.on("projectCreated", updateTasksArray);

function updateTasksArray() {
  tasksFromProjects = [];

  fillTasks();
}

function fillTasks() {
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      tasksFromProjects.push(task);
    });
  });
}

export { getTasksDataForSearching };
