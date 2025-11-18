// Load tasks from localStorage on page load
window.onload = function () {
  loadTasks();
};

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Enter a task!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  loadTasks();
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function editTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let newTask = prompt("Edit task:", tasks[index]);

  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  loadTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
