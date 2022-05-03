import deleteItemsInDiv from "../functions/utility/deleteItemsInDiv";

const formPage = () => {
  const contentDiv = document.querySelector("#content");

  deleteItemsInDiv(contentDiv);

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
  projectTitleLabel.for = "formProjectTitle";
  projectTitleLabel.classList.add("formLabels");
  projectTitleLabel.textContent = "Project Title:";
  formContent.appendChild(projectTitleLabel);

  const projectTitle = document.createElement("input");
  projectTitle.type = "text";
  projectTitle.maxLength = 32;
  projectTitle.setAttribute("id", "formProjectTitle");
  formContent.appendChild(projectTitle);

  const projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.for = "formProjectDescription";
  projectDescriptionLabel.classList.add("formLabels");
  projectDescriptionLabel.textContent = "Project Description:";
  formContent.appendChild(projectDescriptionLabel);

  const projectDescription = document.createElement("input");
  projectDescription.type = "text";
  projectDescription.maxLength = 55;
  projectDescription.setAttribute("id", "formProjectDescription");
  formContent.appendChild(projectDescription);

  const projectDueDateLabel = document.createElement("label");
  projectDueDateLabel.for = "formProjectDueDate";
  projectDueDateLabel.classList.add("formLabels");
  projectDueDateLabel.textContent = "Project Due Date:";
  formContent.appendChild(projectDueDateLabel);

  const projectDueDate = document.createElement("input");
  projectDueDate.type = "date";
  projectDueDate.setAttribute("id", "formProjectDueDate");
  formContent.appendChild(projectDueDate);

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("formLabels");
  priorityDiv.textContent = "Project Priority:";
  priorityDiv.setAttribute("id", "projectPriority");
  formContent.appendChild(priorityDiv);

  const projectPriorityLabel1 = document.createElement("label");
  projectPriorityLabel1.for = "projectPriorityCheckbox1";
  projectPriorityLabel1.textContent = "Important";
  priorityDiv.appendChild(projectPriorityLabel1);

  const projectPriority1 = document.createElement("input");
  projectPriority1.type = "checkbox";
  projectPriority1.setAttribute("id", "projectPriorityCheckbox1");
  priorityDiv.appendChild(projectPriority1);

  const projectNotesLabel = document.createElement("label");
  projectNotesLabel.for = "fomrProjectNotes";
  projectNotesLabel.classList.add("formLabels");
  projectNotesLabel.textContent = "Project Notes:";
  formContent.appendChild(projectNotesLabel);

  const projectNotes = document.createElement("textarea");
  projectNotes.setAttribute("id", "formProjectNotes");
  projectNotes.rows = 7;
  projectNotes.maxLength = 200;
  formContent.appendChild(projectNotes);

  const submitButton = document.createElement("input");
  submitButton.setAttribute("id", "submitButton");
  submitButton.type = "submit";
  submitButton.value = "Create Project";
  formContent.appendChild(submitButton);
};

export default formPage;
