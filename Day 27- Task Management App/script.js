let task = [];

function addTask() {
  const taskName = document.querySelector("#task").value.trim();
  if (taskName === "") {
    alert("Please enter a task");
    return;
  }
  task.push({ text: taskName, isCompleted: false });
  document.querySelector("#task").value = "";
  updateTaskList();
}

function deleteTask(index) {
    task.splice(index, 1);
    updateTaskList();
}

function toggleTaskCompleted(index) {
    task[index].isCompleted = !task[index].isCompleted;
    updateTaskList();
}

function editTask(index) {
    const newTask = prompt("Enter new task");
    if (newTask === "") {
        alert("Please enter a task");
        return;
    }
    task[index].text = newTask;
    updateTaskList();
}

function updateTaskList() {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";
  task.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.innerHTML = `
    <div class="taskItem">
        <div class="task ${task.isCompleted ? "completed":''}">
            <input type="checkbox" class="checkbox ${task.isCompleted ? "checked":''}" />
            <p>${task.text}</p>
        </div>
        <div class="icons">
            <img src="img/edit.png" onClick="editTask(${index})" alt="">
            <img src="img/bin.png" onClick="deleteTask(${index})" alt="">
        </div>
    </div>
     `;
    taskElement.addEventListener("change", (e) => {
      toggleTaskCompleted(index);
    });
    taskList.appendChild(taskElement);
  });
}

document.querySelector("#addTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
