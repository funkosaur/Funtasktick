function checkFormRequirements() {
  let isError = false;
  let today = new Date().getTime();
  let dueDates = new Date(formProjectDueDate.value).getTime();

  if (
    formProjectTitle.value == "" ||
    formProjectDescription.value == "" ||
    formProjectDueDate.value == ""
  ) {
    isError = true;

    if (formProjectTitle.value == "") {
      formProjectTitle.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
      setTimeout(function () {
        projectTitle.style.boxShadow = "none";
      }, 2000);
    }
    if (formProjectDescription.value == "") {
      formProjectDescription.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
      setTimeout(function () {
        formProjectDescription.style.boxShadow = "none";
      }, 2000);
    }
    if (formProjectDueDate.value == "") {
      formProjectDueDate.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
      setTimeout(function () {
        formProjectDueDate.style.boxShadow = "none";
      }, 2000);
    }
  }

  if (dueDates < today) {
    isError = true;
    formProjectDueDate.style.boxShadow = "0px 0px 2px 2px rgb(171, 0, 0)";
    setTimeout(function () {
      formProjectDueDate.style.boxShadow = "none";
    }, 2000);
  }

  return isError;
}

export default checkFormRequirements;
