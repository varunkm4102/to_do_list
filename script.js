const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);

function addTask() {
  const task = taskInput.value;
  if (task.trim() === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}
