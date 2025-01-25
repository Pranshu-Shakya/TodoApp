const inputTask = document.getElementById('inputBox');
const taskList = document.getElementById('list');
const btn = document.getElementById("btn");

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

function createTask() {
    const li = document.createElement("li");
    li.innerHTML = inputTask.value;
    taskList.appendChild(li);
    inputTask.value = "";
    const span = document.createElement("span");
    span.innerHTML = "&#10006;";
    li.append(span);
    saveData();
}

inputTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (inputTask.value === "") {
            alert("Please enter a task");
        } else {
            createTask();
        }
    }
})

btn.addEventListener("click", () => {
    if (inputTask.value === "") {
        alert("Please enter a task");
    } else {
        createTask();
    }
})

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
})

taskList.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
    saveData();
})

document.addEventListener("DOMContentLoaded", loadTasks);