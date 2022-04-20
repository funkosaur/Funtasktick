import deleteItemsInDiv from "../functions/utility/deleteItemsInDiv";

const welcomePage = () => {
  const contentDiv = document.querySelector("#content");

  deleteItemsInDiv(contentDiv);

  const welcomeLayout = document.createElement("div");
  welcomeLayout.setAttribute("id", "welcomeLayout");
  contentDiv.appendChild(welcomeLayout);

  const welcomeContent = document.createElement("div");
  welcomeContent.setAttribute("id", "welcomeContent");
  welcomeLayout.appendChild(welcomeContent);

  const animatedTitle = document.createElement("div")
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

};

export default welcomePage;
