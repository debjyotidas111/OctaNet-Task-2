document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const filter = document.getElementById("filter");

   
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskCategory = filter.value;
        const taskElement = document.createElement("li");
        taskElement.className = taskCategory;
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(taskElement);
        taskInput.value = "";
    }

  
    function deleteTask(e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    }

   
    function filterTasks() {
        const selectedCategory = filter.value;
        const tasks = document.querySelectorAll("li");

        tasks.forEach((task) => {
            task.style.display =
                selectedCategory === "all" ||
                task.classList.contains(selectedCategory)
                    ? "block"
                    : "none";
        });
    }

    
    addTaskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", deleteTask);
    filter.addEventListener("change", filterTasks);
});
