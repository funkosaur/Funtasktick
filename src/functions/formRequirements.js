function checkFormRequirements() {
  let isError = false;
  let today = new Date().getTime();
  let dueDates = new Date(projectDueDate.value).getTime();

  if (
    projectTitle.value == "" ||
    projectDescription.value == "" ||
    projectDueDate.value == ""
  ) {
    isError = true;

    if (projectTitle.value == "") {
      projectTitle.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
      setTimeout(function () {
        projectTitle.style.boxShadow = "none";
      }, 2000);
    }
    if (projectDescription.value == "") {
      projectDescription.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
      setTimeout(function () {
        projectDescription.style.boxShadow = "none";
      }, 2000);
    }
    if (projectDueDate.value == "") {
      projectDueDate.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
      setTimeout(function () {
        projectDueDate.style.boxShadow = "none";
      }, 2000);
    }
  }

  if (dueDates < today) {
    isError = true;
    projectDueDate.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
    setTimeout(function () {
      projectDueDate.style.boxShadow = "none";
    }, 2000);
  }

  return isError;
}

export default checkFormRequirements;
