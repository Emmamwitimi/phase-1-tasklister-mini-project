document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // references to the form and the tasks list
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  //eventListener to our form
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    //get the value of taskdescription input
    const taskdescription = document.getElementById("new-task-description");

    //new li item to set the taskdescription content
    const taskItem = document.createElement("li");
    taskItem.textContent = taskdescription;

    //append taskitem to tasks list
    taskList.appendChild(taskItem);

    //clear the input field after submitting
    document.getElementById("new-task-description").value = "";
  });

});
