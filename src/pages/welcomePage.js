import deleteItemsInDiv from "../functions/utility/deleteItemsInDiv";
import formPage from "./formPage.js";
import { takeFormInfo } from "../functions/takingFormInfo.js";

const welcomePage = () => {
  const contentDiv = document.querySelector("#content");

  deleteItemsInDiv(contentDiv);

  const welcomeLayout = document.createElement("div");
  welcomeLayout.setAttribute("id", "welcomeLayout");
  contentDiv.appendChild(welcomeLayout);

  const welcomeContent = document.createElement("div");
  welcomeContent.setAttribute("id", "welcomeContent");
  welcomeLayout.appendChild(welcomeContent);

  const animatedTitle = document.createElement("div");
  animatedTitle.classList.add("animated-title");
  welcomeContent.appendChild(animatedTitle);

  const textTopDiv = document.createElement("div");
  textTopDiv.classList.add("text-top");
  animatedTitle.appendChild(textTopDiv);

  const topTextContainer = document.createElement("div");
  textTopDiv.appendChild(topTextContainer);

  const firstTextSpan = document.createElement("span");
  firstTextSpan.textContent = "Welcome";
  topTextContainer.appendChild(firstTextSpan);

  const secondTextSpan = document.createElement("span");
  secondTextSpan.textContent = "To";
  topTextContainer.appendChild(secondTextSpan);

  const textBottomDiv = document.createElement("div");
  textBottomDiv.classList.add("text-bottom");
  animatedTitle.appendChild(textBottomDiv);

  const thirdTextDiv = document.createElement("div");
  thirdTextDiv.textContent = "Funtasktick";
  textBottomDiv.appendChild(thirdTextDiv);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("id", "descriptionDiv");
  welcomeLayout.appendChild(descriptionDiv);

  const descriptionText = document.createElement("div");
  descriptionText.setAttribute("id", "descriptionText");
  descriptionDiv.appendChild(descriptionText);

  const descriptionSpan1 = document.createElement("span");
  descriptionSpan1.setAttribute("id", "descriptionSpan1");
  descriptionSpan1.textContent = "Funtasktick";
  descriptionSpan1.style.color = "#ab0000";
  descriptionText.appendChild(descriptionSpan1);

  const descriptionSpan2 = document.createElement("span");
  descriptionSpan2.setAttribute("id", "descriptionSpan2");
  descriptionSpan2.textContent =
    " is a to-do list web app where you can create projects with tasks, notes and due dates to help manage your time and organize your plans";
  descriptionText.appendChild(descriptionSpan2);

  const createProjectButton = document.createElement("button");
  createProjectButton.setAttribute("id", "addNewProject");
  createProjectButton.textContent = "Create a New Project";
  descriptionDiv.appendChild(createProjectButton);

  createProjectButton.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");
    deleteItemsInDiv(contentDiv);
    formPage();
    takeFormInfo();
  });

  setTimeout(() => {
    descriptionDiv.style.transform = "translate(0px, -15vh)";
    if (window.screen.width < 800)
      descriptionDiv.style.transform = "translate(50px, -7vh)";
  }, 2100);
};

export default welcomePage;
