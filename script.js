const navItems = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const pageName = item.dataset.page;

        pages.forEach(page => {
            page.classList.remove("active-page");
        });

        document.getElementById(pageName)?.classList.add("active-page");

        document.querySelectorAll(".nav-item").forEach(button => {
            button.classList.remove("active");
        });

        if (item.classList.contains("nav-item")) {
            item.classList.add("active");
        }
    });
});


/* TASK SYSTEM */

let tasks = [
    {
        id: 1,
        name: "Math homework",
        subject: "Mathematics",
        date: "2026-08-30",
        completed: false
    },
    {
        id: 2,
        name: "English essay",
        subject: "English",
        date: "2026-09-01",
        completed: false
    },
    {
        id: 3,
        name: "Computer Science project",
        subject: "Computer Science",
        date: "2026-09-03",
        completed: false
    }
];

const taskList = document.getElementById("taskList");
const dashboardTasks = document.getElementById("dashboardTasks");
const completedCount = document.getElementById("completedCount");

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const element = document.createElement("div");

        element.className = `task ${task.completed ? "completed" : ""}`;

        element.innerHTML = `
            <div class="task-left">
                <input 
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                >

                <div class="task-info">
                    <strong>${task.name}</strong>
                    <small>${task.subject} • Due ${task.date}</small>
                </div>
            </div>

            <button 
                class="delete-task"
                onclick="deleteTask(${task.id})"
            >
                🗑
            </button>
        `;

        taskList.appendChild(element);
    });

    renderDashboardTasks();

    const completed = tasks.filter(task => task.completed).length;

    completedCount.textContent = completed;
}


function renderDashboardTasks() {

    dashboardTasks.innerHTML = "";

    tasks
        .filter(task => !task.completed)
        .slice(0, 3)
        .forEach(task => {

            const element = document.createElement("div");

            element.className = "schedule-item";

            element.innerHTML = `
                <div class="time">!</div>
                <div>
                    <strong>${task.name}</strong>
                    <p>${task.subject} • ${task.date}</p>
                </div>
            `;

            dashboardTasks.appendChild(element);
        });
}


function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;
    }

    renderTasks();
}


function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();
}


/* MODAL */

const modal = document.getElementById("taskModal");
const addTaskBtn = document.getElementById("addTaskBtn");
const closeModal = document.getElementById("closeModal");
const saveTask = document.getElementById("saveTask");

addTaskBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});


modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


saveTask.addEventListener("click", () => {

    const name = document.getElementById("taskName").value.trim();
    const subject = document.getElementById("taskSubject").value;
    const date = document.getElementById("taskDate").value;

    if (!name || !date) {
        alert("Please enter a task name and due date.");
        return;
    }

    tasks.push({
        id: Date.now(),
        name: name,
        subject: subject,
        date: date,
        completed: false
    });

    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";

    modal.classList.remove("show");

    renderTasks();
});


/* INITIAL LOAD */

renderTasks();
