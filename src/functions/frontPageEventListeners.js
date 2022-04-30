import formPage from "../pages/formPage.js";
import { takeFormInfo } from "./takingFormInfo.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import { projects } from "../index.js";
import events from "./utility/pubsub.js";
import tasksPage from "../pages/tasksPage.js";
import { startOfWeek, endOfWeek } from 'date-fns'
import renderTasks from "./renderTasks.js";
import todaysPage from "../pages/todayPage.js";
import { linesThrough, globalLinesThrough } from "./tasksPageEventListeners.js";
import thisWeeksPage from "../pages/thisWeekPage.js";

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const searchIcon = document.querySelector("#searchIcon");
const contentDiv = document.querySelector("#content");
const todayDiv = document.querySelector("#todayDiv");
const thisWeekDiv = document.querySelector("#thisWeekDiv");
const menuButton = document.querySelector("#leftMenu");

let tasksFromProjects = [];
let allTasks = [];
let todaysTasks = {};
todaysTasks.tasks = [];
let thisWeeksTasks = {};
thisWeeksTasks.tasks = [];

thisWeekDiv.addEventListener("click", () => {
  getThisWeeksTasks();
  thisWeeksPage()
  if (thisWeeksTasks.tasks.length == 0) {
    const tasksList = document.querySelector("#tasksList");
    tasksList.textContent = "No tasks to be done this week. :)";
    tasksList.style.fontSize = "1.8em"
    tasksList.style.display = "flex"
    tasksList.style.justifyContent = "center"
  } else {
    renderTasks(thisWeeksTasks, globalLinesThrough.bind(thisWeeksTasks));
    const deleteBtn = document.querySelectorAll("#deleteButton");
    deleteBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    const dateAndDelete = document.querySelectorAll("#dateAndDelete");
    dateAndDelete.forEach((box) => (box.style.justifyContent = "flex-end"));
  }

})

todayDiv.addEventListener("click", () => {
  getTodaysTasks();
  todaysPage();
  if (todaysTasks.tasks.length == 0) {
    const tasksList = document.querySelector("#tasksList");
    tasksList.textContent = "No tasks to be done today. :)";
    tasksList.style.fontSize = "1.8em"
    tasksList.style.display = "flex"
    tasksList.style.justifyContent = "center"
  } else {
    renderTasks(todaysTasks, globalLinesThrough.bind(todaysTasks));
    const deleteBtn = document.querySelectorAll("#deleteButton");
    deleteBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    const dateAndDelete = document.querySelectorAll("#dateAndDelete");
    dateAndDelete.forEach((box) => (box.style.justifyContent = "flex-end"));
  }
});

searchInput.addEventListener("input", (e) => {
  userCardContainer.style.display = "block";
  const searchTerm = e.target.value.toLowerCase();
  console.log(searchTerm);
  allTasks.forEach((task) => {
    const isVisible = task.taskText.includes(searchTerm);
    task.element.classList.toggle("hidden", !isVisible);
  });
  if (searchTerm.length < 1) userCardContainer.style.display = "none";
});

events.on("projectCreated", updateTasksArray);
events.on("projectCreated", getData);

searchIcon.addEventListener("click", (e) => {
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
});

menuButton.addEventListener("click", () => {
  const leftNavigation = document.querySelector("#leftNavigation");
  leftNavigation.classList.toggle("leftNavTransform")
  leftNavigation.classList.toggle("leftNavTransformed")

    
})

const frontPageEventListeners = () => {
  const contentDiv = document.querySelector("#content");

  const addNewProjectButton = document.querySelector("#addNewProject");
  addNewProjectButton.addEventListener("click", () => {
    deleteItemsInDiv(contentDiv);
    formPage();
    takeFormInfo();
  });
};

function getData() {
  updateTasksArray();
  console.log(allTasks);
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
  console.log("runssss");
}

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

function getTodaysTasks() {
  todaysTasks.tasks = [];
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      let today = new Date().toISOString().slice(0, 10);
      if (task.dueDate == today) todaysTasks.tasks.push(task);
    });
  });
}

function getThisWeeksTasks() {
  thisWeeksTasks.tasks = [];
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      let today = new Date()
      let start = startOfWeek(today, {weekStartsOn: 2}).toISOString().slice(0, 10);
      let end = endOfWeek(today, {weekStartsOn: 1}).toISOString().slice(0, 10); 
      if(task.dueDate > start && task.dueDate < end) thisWeeksTasks.tasks.push(task)
    })
  })
}

export { frontPageEventListeners, getData, todaysTasks };
