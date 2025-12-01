const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const task = input.value.trim();

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-name">${task}</span>
        <div class="btn-group">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Complete Action
    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.querySelector(".task-name").classList.toggle("completed");
    });

    // Delete Action
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
});
