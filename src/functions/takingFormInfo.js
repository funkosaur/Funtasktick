const projectFactory = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes };
};

const projects = [];

function processFormInfo(event) {
  const projectTitle = document.querySelector("#projectTitle");
  const projectDescription = document.querySelector("#projectDescription");
  const projectDueDate = document.querySelector("#projectDueDate");
  const projectPriority = document.querySelector("#projectPriorityCheckbox1");
  const projectNotes = document.querySelector("#projectNotes");

  event.preventDefault();

  const newProject = projectFactory(
    projectTitle.value,
    projectDescription.value,
    projectDueDate.value,
    projectPriority.value,
    projectNotes.value
  );

  projects.push(newProject);
  this.reset();
  console.log(projects);
}

export { processFormInfo, projects };
