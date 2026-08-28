/* =========================================================
   STUDENTOS
   Main application logic
========================================================= */


/* =========================================================
   STATE
========================================================= */

let tasks = JSON.parse(localStorage.getItem("studentos_tasks")) || [
    {
        id: 1,
        title: "Complete algebra homework",
        subject: "Mathematics",
        date: "2026-08-29",
        priority: "high",
        completed: false
    },
    {
        id: 2,
        title: "Write English essay",
        subject: "English",
        date: "2026-08-30",
        priority: "medium",
        completed: false
    },
    {
        id: 3,
        title: "Finish CS project",
        subject: "Computer Science",
        date: "2026-09-01",
        priority: "high",
        completed: false
    },
    {
        id: 4,
        title: "Read history chapter 7",
        subject: "History",
        date: "2026-09-03",
        priority: "low",
        completed: true
    }
];


let notes = JSON.parse(localStorage.getItem("studentos_notes")) || [
    {
        id: 1,
        title: "Study plan",
        content: "Finish mathematics first, then work on the CS project.",
        date: "Today"
    },
    {
        id: 2,
        title: "Things to remember",
        content: "Bring calculator and notebook to mathematics class.",
        date: "Yesterday"
    }
];


let currentFilter = "all";
let currentSubjectFilter = "all";


/* =========================================================
   HELPERS
========================================================= */

function saveTasks() {
    localStorage.setItem("studentos_tasks", JSON.stringify(tasks));
}


function saveNotes() {
    localStorage.setItem("studentos_notes", JSON.stringify(notes));
}


function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


function formatDate(date) {

    const d = new Date(date + "T00:00:00");

    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================================================
   NAVIGATION
========================================================= */

const navButtons = document.querySelectorAll("[data-page]");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

        document.querySelectorAll(".page").forEach(section => {
            section.classList.remove("active-page");
        });

        const target = document.getElementById(page);

        if (target) {
            target.classList.add("active-page");
        }

        document.querySelectorAll(".nav-item").forEach(item => {
            item.classList.remove("active");
        });

        const matchingNav = document.querySelector(
            `.nav-item[data-page="${page}"]`
        );

        if (matchingNav) {
            matchingNav.classList.add("active");
        }

        document.getElementById("sidebar").classList.remove("open");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

document.getElementById("mobileMenu").addEventListener("click", () => {

    document.getElementById("sidebar").classList.toggle("open");

});


/* =========================================================
   DATE
========================================================= */

function updateDate() {

    const dateElement = document.getElementById("currentDate");

    const now = new Date();

    dateElement.textContent = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
}

updateDate();


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

    const theme = localStorage.getItem("studentos_theme") || "light";

    document.body.classList.toggle("dark", theme === "dark");

    document.getElementById("themeText").textContent =
        theme === "dark" ? "Light mode" : "Dark mode";
}


function toggleTheme() {

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(
        "studentos_theme",
        isDark ? "light" : "dark"
    );

    applyTheme();
}


document.getElementById("themeToggle").addEventListener(
    "click",
    toggleTheme
);


document.getElementById("settingsTheme").addEventListener(
    "click",
    toggleTheme
);


applyTheme();


/* =========================================================
   TASK RENDERING
========================================================= */

function getFilteredTasks() {

    return tasks.filter(task => {

        const matchesStatus =
            currentFilter === "all" ||
            (currentFilter === "active" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        const matchesSubject =
            currentSubjectFilter === "all" ||
            task.subject === currentSubjectFilter;

        return matchesStatus && matchesSubject;

    });

}


function renderFullTasks() {

    const container = document.getElementById("fullTaskList");

    const filtered = getFilteredTasks();

    if (filtered.length === 0) {

        container.innerHTML = `
            <div style="text-align:center;padding:40px;color:var(--muted)">
                No tasks found.
            </div>
        `;

        return;
    }


    container.innerHTML = filtered.map(task => {

        return `
            <div class="full-task ${task.completed ? "completed" : ""}">

                <input
                    type="checkbox"
                    class="task-check"
                    ${task.completed ? "checked" : ""}
                    data-task-id="${task.id}"
                >

                <div>

                    <div class="full-task-title">
                        ${escapeHTML(task.title)}
                    </div>

                    <div class="full-task-meta">
                        ${escapeHTML(task.subject)}
                        · Due ${formatDate(task.date)}
                    </div>

                </div>

                <div class="task-actions">

                    <span class="priority ${task.priority}">
                        ${task.priority.toUpperCase()}
                    </span>

                    <button
                        class="delete-task"
                        data-delete-id="${task.id}"
                        title="Delete task"
                    >
                        ×
                    </button>

                </div>

            </div>
        `;

    }).join("");

}


function renderUpcomingTasks() {

    const container = document.getElementById("upcomingTasks");

    const upcoming = tasks
        .filter(task => !task.completed)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 4);


    if (upcoming.length === 0) {

        container.innerHTML = `
            <div style="padding:20px 0;color:var(--muted);font-size:10px">
                No upcoming tasks.
            </div>
        `;

        return;
    }


    container.innerHTML = upcoming.map(task => {

        return `
            <div class="task-preview">

                <input
                    class="task-check"
                    type="checkbox"
                    data-task-id="${task.id}"
                >

                <div class="task-preview-main">

                    <strong>${escapeHTML(task.title)}</strong>

                    <span>
                        ${escapeHTML(task.subject)}
                        · ${formatDate(task.date)}
                    </span>

                </div>

                <span class="priority ${task.priority}">
                    ${task.priority}
                </span>

            </div>
        `;

    }).join("");

}


function updateStats() {

    const completed = tasks.filter(task => task.completed).length;

    const total = tasks.length;

    const progress = total === 0
        ? 0
        : Math.round((completed / total) * 100);


    document.getElementById("completedStat").textContent = completed;

    document.getElementById("heroCompleted").textContent = completed;

    document.getElementById("heroProgress").style.width =
        `${progress}%`;

    document.getElementById("heroProgressText").textContent =
        `${progress}%`;


    const activeTasks =
        tasks.filter(task => !task.completed).length;

    document.getElementById("taskBadge").textContent =
        activeTasks;
}


function renderTasks() {

    saveTasks();

    renderFullTasks();

    renderUpcomingTasks();

    updateStats();

}


/* =========================================================
   TASK CHECKBOX / DELETE
========================================================= */

document.addEventListener("change", event => {

    if (!event.target.matches("[data-task-id]")) {
        return;
    }

    const id = Number(event.target.dataset.taskId);

    const task = tasks.find(item => item.id === id);

    if (!task) {
        return;
    }

    task.completed = event.target.checked;

    renderTasks();

    showToast(
        task.completed
            ? "Task completed"
            : "Task marked active"
    );

});


document.addEventListener("click", event => {

    const deleteButton = event.target.closest("[data-delete-id]");

    if (!deleteButton) {
        return;
    }

    const id = Number(deleteButton.dataset.deleteId);

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();

    showToast("Task deleted");

});


/* =========================================================
   FILTERS
========================================================= */

document.querySelectorAll(".filter-tab").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter-tab").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderFullTasks();
    });

});


document.getElementById("subjectFilter").addEventListener(
    "change",
    event => {

        currentSubjectFilter = event.target.value;

        renderFullTasks();

    }
);


/* =========================================================
   TASK MODAL
========================================================= */

const taskModal = document.getElementById("taskModal");


function openTaskModal() {

    taskModal.classList.add("show");

    document.getElementById("taskName").focus();

}


function closeTaskModal() {

    taskModal.classList.remove("show");

}


document.getElementById("openTaskModal").addEventListener(
    "click",
    openTaskModal
);


/* Dashboard add button */
document.querySelectorAll('[data-page="tasks"]').forEach(button => {

    button.addEventListener("click", () => {

        const isAddButton =
            button.classList.contains("primary-button");

        if (isAddButton) {
            setTimeout(openTaskModal, 150);
        }

    });

});


document.getElementById("closeTaskModal").addEventListener(
    "click",
    closeTaskModal
);


taskModal.addEventListener("click", event => {

    if (event.target === taskModal) {
        closeTaskModal();
    }

});


document.getElementById("saveTask").addEventListener(
    "click",
    () => {

        const title =
            document.getElementById("taskName").value.trim();

        const subject =
            document.getElementById("taskSubject").value;

        const date =
            document.getElementById("taskDate").value;

        const priority =
            document.getElementById("taskPriority").value;


        if (!title || !date) {

            showToast("Please enter a task name and deadline.");

            return;
        }


        tasks.push({
            id: Date.now(),
            title,
            subject,
            date,
            priority,
            completed: false
        });


        document.getElementById("taskName").value = "";

        document.getElementById("taskDate").value = "";


        closeTaskModal();

        renderTasks();

        showToast("Task created");

    }
);


/* =========================================================
   NOTES
========================================================= */

const quickNote = document.getElementById("quickNote");

quickNote.value =
    localStorage.getItem("studentos_quick_note") || "";


document.getElementById("saveNote").addEventListener(
    "click",
    () => {

        localStorage.setItem(
            "studentos_quick_note",
            quickNote.value
        );

        document.getElementById("noteStatus").textContent =
            "Saved just now";

        showToast("Note saved");

    }
);


function renderNotes() {

    const container = document.getElementById("notesGrid");

    if (notes.length === 0) {

        container.innerHTML = `
            <div style="color:var(--muted)">
                No notes yet.
            </div>
        `;

        return;
    }


    container.innerHTML = notes.map(note => {

        return `
            <div class="note-card">

                <h2>${escapeHTML(note.title)}</h2>

                <p>${escapeHTML(note.content)}</p>

                <div class="note-card-footer">

                    <span>${note.date}</span>

                    <button
                        class="note-delete"
                        data-note-delete="${note.id}"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;

    }).join("");

}


const noteModal = document.getElementById("noteModal");


document.getElementById("addNoteButton").addEventListener(
    "click",
    () => {

        noteModal.classList.add("show");

        document.getElementById("noteTitle").focus();

    }
);


document.getElementById("closeNoteModal").addEventListener(
    "click",
    () => {
        noteModal.classList.remove("show");
    }
);


noteModal.addEventListener("click", event => {

    if (event.target === noteModal) {
        noteModal.classList.remove("show");
    }

});


document.getElementById("saveNewNote").addEventListener(
    "click",
    () => {

        const title =
            document.getElementById("noteTitle").value.trim();

        const content =
            document.getElementById("noteContent").value.trim();


        if (!title || !content) {

            showToast("Enter a title and note.");

            return;

        }


        notes.unshift({
            id: Date.now(),
            title,
            content,
            date: "Just now"
        });


        saveNotes();

        renderNotes();

        document.getElementById("noteTitle").value = "";

        document.getElementById("noteContent").value = "";

        noteModal.classList.remove("show");

        showToast("Note created");

    }
);


document.addEventListener("click", event => {

    const button = event.target.closest("[data-note-delete]");

    if (!button) {
        return;
    }

    const id = Number(button.dataset.noteDelete);

    notes = notes.filter(note => note.id !== id);

    saveNotes();

    renderNotes();

    showToast("Note deleted");

});


/* =========================================================
   NOTIFICATIONS
========================================================= */

const notificationPanel =
    document.getElementById("notificationPanel");


document.getElementById("notificationButton").addEventListener(
    "click",
    () => {

        notificationPanel.classList.toggle("show");

    }
);


document.getElementById("closeNotifications").addEventListener(
    "click",
    () => {

        notificationPanel.classList.remove("show");

    }
);


/* =========================================================
   STUDY TIMER
========================================================= */

let timerSeconds = 25 * 60;

let timerInterval = null;

let sessions = Number(
    localStorage.getItem("studentos_sessions") || 0
);

let focusMinutes = Number(
    localStorage.getItem("studentos_focus_minutes") || 0
);


function updateTimerDisplay() {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;

    document.getElementById("timerMinutes").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


function completeTimerSession() {

    sessions++;

    focusMinutes +=
        Number(
            document
                .querySelector(".timer-mode button.active")
                .dataset.minutes
        );


    localStorage.setItem(
        "studentos_sessions",
        sessions
    );

    localStorage.setItem(
        "studentos_focus_minutes",
        focusMinutes
    );


    document.getElementById("sessionCount").textContent =
        sessions;

    document.getElementById("focusTime").textContent =
        `${focusMinutes}m`;


    showToast("Study session complete");

}


function startTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

        document.getElementById("timerStart").textContent =
            "Start";

        return;
    }


    document.getElementById("timerStart").textContent =
        "Pause";


    timerInterval = setInterval(() => {

        if (timerSeconds <= 0) {

            clearInterval(timerInterval);

            timerInterval = null;

            document.getElementById("timerStart").textContent =
                "Start";

            completeTimerSession();

            return;
        }


        timerSeconds--;

        updateTimerDisplay();

    }, 1000);

}


function resetTimer() {

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const activeMode =
        document.querySelector(".timer-mode button.active");

    timerSeconds =
        Number(activeMode.dataset.minutes) * 60;

    document.getElementById("timerStart").textContent =
        "Start";

    updateTimerDisplay();

}


document.getElementById("timerStart").addEventListener(
    "click",
    startTimer
);


document.getElementById("timerReset").addEventListener(
    "click",
    resetTimer
);


document.querySelectorAll(".timer-mode button").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".timer-mode button")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        resetTimer();

    });

});


document.getElementById("sessionCount").textContent = sessions;

document.getElementById("focusTime").textContent =
    `${focusMinutes}m`;

updateTimerDisplay();


/* =========================================================
   SEARCH
========================================================= */

const searchInput =
    document.getElementById("globalSearch");


searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        const query =
            searchInput.value.toLowerCase().trim();


        if (!query) {
            return;
        }


        const matchedTask =
            tasks.find(task =>
                task.title.toLowerCase().includes(query) ||
                task.subject.toLowerCase().includes(query)
            );


        if (matchedTask) {

            document
                .querySelector('[data-page="tasks"]')
                .click();

            showToast(`Found: ${matchedTask.title}`);

            return;
        }


        const matchedNote =
            notes.find(note =>
                note.title.toLowerCase().includes(query) ||
                note.content.toLowerCase().includes(query)
            );


        if (matchedNote) {

            document
                .querySelector('[data-page="notes"]')
                .click();

            showToast(`Found note: ${matchedNote.title}`);

            return;
        }


        showToast("Nothing found.");
    }

});


/* Ctrl + K */

document.addEventListener("keydown", event => {

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {

        event.preventDefault();

        searchInput.focus();

    }

});


/* =========================================================
   CLEAR DATA
========================================================= */

document.getElementById("clearData").addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Clear locally stored StudentOS tasks, notes and settings?"
            );

        if (!confirmed) {
            return;
        }


        localStorage.removeItem("studentos_tasks");
        localStorage.removeItem("studentos_notes");
        localStorage.removeItem("studentos_quick_note");
        localStorage.removeItem("studentos_sessions");
        localStorage.removeItem("studentos_focus_minutes");

        location.reload();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderTasks();

renderNotes();

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document
            .querySelectorAll(".modal.show")
            .forEach(modal => modal.classList.remove("show"));

        notificationPanel.classList.remove("show");

    }

});
