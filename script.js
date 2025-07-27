document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("add-task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const createTaskElement = (taskText) => {
    const li = document.createElement("li");
    li.className =
      "task-item flex items-center justify-between bg-gray-100 p-4 rounded-lg";

    const taskSpan = document.createElement("span");
    taskSpan.className = "text-gray-700";
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className =
      "delete-btn text-red-500 hover:text-red-700 transition";
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    return li;
  };

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const newTask = createTaskElement(taskText);
      taskList.prepend(newTask);
      taskInput.value = "";
      taskInput.focus();
    }
  });

  const exampleTask = document.querySelector(".task-item");
  if (exampleTask) {
    const exampleDeleteBtn = exampleTask.querySelector(".delete-btn");
    if (exampleDeleteBtn) {
      exampleDeleteBtn.addEventListener("click", () => {
        taskList.removeChild(exampleTask);
      });
    }
  }
});
