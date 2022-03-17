const formPage = () => {
  const contentDiv = document.querySelector("#content");

  const formLayout = document.createElement("div");
  formLayout.setAttribute("id", "formLayout");
  contentDiv.appendChild(formLayout);

  const formTitle = document.createElement("div");
  formTitle.setAttribute("id", "formTitle");
  formTitle.textContent = "Create a new project";
  formLayout.appendChild(formTitle);

  const formContent = document.createElement("form");
  formContent.setAttribute("id", "formContent");
  formLayout.appendChild(formContent);

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.for = "projectTitle";
  projectTitleLabel.classList.add("formLabels");
  projectTitleLabel.textContent = "Project Title";
  formContent.appendChild(projectTitleLabel);

  const projectTitle = document.createElement("input");
  projectTitle.type = "text";
  projectTitle.setAttribute("id", "projectTitle");
  formContent.appendChild(projectTitle);
};

export default formPage;
