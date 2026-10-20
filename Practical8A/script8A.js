let tasks = [];

const input = document.getElementById("task");
const list = document.getElementById("list");

document.getElementById("add").onclick = () => {
    if (!input.value.trim()) return;

    tasks.push({ title: input.value, done: false });
    input.value = "";
    showTasks();
};

function showTasks() {
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.textContent = task.title + (task.done ? " ✓" : "");
        li.className = task.done ? "done" : "";

        li.onclick = () => {
            if (confirm("OK = Complete, Cancel = Delete")) {
                task.done = !task.done;
            } else {
                tasks.splice(i, 1);
            }
            showTasks();
        };

        list.appendChild(li);
    });
}