let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const taskCount = document.getElementById('taskCount');

function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('todoTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}

function saveTasksToStorage() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function updateTaskCount() {
    const count = tasks.length;
    taskCount.textContent = `${count} ${count === 1 ? 'task' : 'tasks'}`;
}

function toggleEmptyState() {
    if (tasks.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = {
        id: generateId(),
        text: taskText,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasksToStorage();
    renderTasks();
    
    taskInput.value = '';
    taskInput.focus();
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasksToStorage();
        renderTasks();
    }
}

function startEditTask(taskId) {
    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const taskTextElement = taskItem.querySelector('.task-text');
    const taskActionsElement = taskItem.querySelector('.task-actions');
    
    const currentText = tasks.find(task => task.id === taskId).text;
    
    taskTextElement.innerHTML = `<input type="text" class="task-edit-input" value="${escapeHtml(currentText)}" maxlength="200">`;
    
    const editInput = taskTextElement.querySelector('.task-edit-input');
    editInput.focus();
    editInput.select();
    
    taskActionsElement.innerHTML = `
        <button class="btn save-btn" onclick="saveEditTask('${taskId}')">Save</button>
        <button class="btn cancel-btn" onclick="cancelEditTask('${taskId}')">Cancel</button>
    `;
    
    editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveEditTask(taskId);
        } else if (e.key === 'Escape') {
            cancelEditTask(taskId);
        }
    });
}

function saveEditTask(taskId) {
    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const editInput = taskItem.querySelector('.task-edit-input');
    const newText = editInput.value.trim();
    
    if (newText === '') {
        alert('Task cannot be empty!');
        editInput.focus();
        return;
    }
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].text = newText;
        tasks[taskIndex].updatedAt = new Date().toISOString();
        saveTasksToStorage();
        renderTasks();
    }
}

function cancelEditTask(taskId) {
    renderTasks();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.setAttribute('data-task-id', task.id);
        
        li.innerHTML = `
            <div class="task-text">${escapeHtml(task.text)}</div>
            <div class="task-actions">
                <button class="btn edit-btn" onclick="startEditTask('${task.id}')">Edit</button>
                <button class="btn delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);
    });
    
    updateTaskCount();
    toggleEmptyState();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

loadTasksFromStorage();
