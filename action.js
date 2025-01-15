// action.js
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");
  
    // Add a new task
    addButton.addEventListener("click", () => {
      const taskText = todoInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        todoInput.value = ""; // Clear input field
      }
    });
  
    // Function to add task to the list
    function addTask(taskText) {
      const li = document.createElement("li");
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
  
      // Add delete functionality
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(li);
      });
  
      li.appendChild(taskSpan);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }
  });
  