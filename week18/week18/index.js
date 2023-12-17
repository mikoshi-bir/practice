
document.addEventListener('DOMContentLoaded', function() {
   
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearButton = document.getElementById('clearButton');
    const emptyMessage = document.getElementById('emptyMessage');
  
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
   
    function updateTaskList() {
      
      taskList.innerHTML = '';
  
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
  
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
          task.completed = this.checked;
          saveTasks();
        });
  
        const span = document.createElement('span');
        span.textContent = task.text;
  
        li.appendChild(checkbox);
        li.appendChild(span);
        taskList.appendChild(li);
      }
  
      if (tasks.length === 0) {
        emptyMessage.style.display = 'block';
        clearButton.disabled = true;
      } else {
        emptyMessage.style.display = 'none';
        clearButton.disabled = false;
      }
    }
  
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const newTask = {
          text: taskText,
          completed: false
        };
  
        tasks.push(newTask);
        saveTasks();
        updateTaskList();
  
        taskInput.value = '';
        taskInput.focus();
      }
    });
  
    clearButton.addEventListener('click', function() {
      tasks = [];
      saveTasks();
      updateTaskList();
    });
  
    updateTaskList();
  });
  