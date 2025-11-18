// ------- SELECT ELEMENTS -------
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // Load saved tasks

// ------- DISPLAY SAVED TASKS ON LOAD -------
window.onload = () => {
    tasks.forEach(task => createTaskElement(task));
};

// ------- ADD TASK -------
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    tasks.push(taskText);  // Save in array
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save in localStorage

    createTaskElement(taskText);
    input.value = "";
});

// ------- CREATE TASK IN DOM -------
function createTaskElement(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // ---- Edit Button ----
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Edit your task:", span.textContent);
        if (newText) {
            span.textContent = newText;

            // update in array + localStorage
            const index = tasks.indexOf(taskText);
            tasks[index] = newText;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    };

    // ---- Delete Button ----
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
        taskList.removeChild(li);

        // remove from array + localStorage
        tasks = tasks.filter(t => t !== span.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
}
