import formPage from "../pages/formPage.js";
import { takeFormInfo } from "./takingFormInfo.js";
import deleteItemsInDiv from "./utility/deleteItemsInDiv.js";
import { projects } from "../index.js";
import events from "./utility/pubsub.js";
import tasksPage from "../pages/tasksPage.js";
import renderTasks from "./renderTasks.js";

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const searchIcon = document.querySelector("#searchIcon");
const contentDiv = document.querySelector("#content");


let tasksFromProjects = [];
let allTasks = [];

searchInput.addEventListener("input", (e) => {
  userCardContainer.style.display = "block";
  const searchTerm = e.target.value.toLowerCase();
  console.log(searchTerm)
  allTasks.forEach((task) => {
    const isVisible = task.taskText.includes(searchTerm);
    task.element.classList.toggle("hidden", !isVisible);
  });
  if(searchTerm.length < 1) userCardContainer.style.display = "none";
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
        renderTasks(project);
        searchInput.value = "";
        userCardContainer.style.display = "none";
      }
    });
  });
});

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
  updateTasksArray()
  console.log(allTasks)
  allTasks = []
  deleteItemsInDiv(userCardContainer)
  allTasks = tasksFromProjects.map((task) => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    card.textContent = task.task;
    card.addEventListener("click", () => {
      searchInput.value = task.task.toUpperCase();
      searchIcon.click()
    });
    userCardContainer.append(card);
    return { taskText: task.task, element: card };
  });
  console.log("runssss")

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

export { frontPageEventListeners, getData };
