function markComplete(courseId) {
    let progress = localStorage.getItem("progress") ? JSON.parse(localStorage.getItem("progress")) : {};
    progress[courseId] = true;
    localStorage.setItem("progress", JSON.stringify(progress));
    updateProgress(courseId);
    updateProgressBar();
}

function updateProgress(courseId) {
    let progress = localStorage.getItem("progress") ? JSON.parse(localStorage.getItem("progress")) : {};
    if (progress[courseId]) {
        document.getElementById(courseId).classList.add("completed");
        document.getElementById(courseId).innerText = "Completed ✅";
    }
}

function updateProgressBar() {
    let progress = localStorage.getItem("progress") ? JSON.parse(localStorage.getItem("progress")) : {};
    let completedCourses = Object.keys(progress).length;
    let totalCourses = document.querySelectorAll(".progress-btn").length;
    let percentage = (completedCourses / totalCourses) * 100;
    document.getElementById("progress-fill").style.width = percentage + "%";
}

function toggleCourse(courseId) {
    let content = document.getElementById(courseId + "-content");
    content.classList.toggle("hidden");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.getElementById("themeToggle").innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress-btn").forEach(button => {
        updateProgress(button.id);
    });
    updateProgressBar();

    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").innerText = "☀️ Light Mode";
    }
});

document.getElementById("themeToggle").addEventListener("click", toggleTheme);
