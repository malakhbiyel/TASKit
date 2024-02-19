const initialTasks = [
  { taskName: 'Task 1', startDate: '2023-11-15', startTime: '08:00', endDate: '2023-11-20', endTime: '12:30', important: false },
  { taskName: 'Task 2', startDate: '2023-11-22', startTime: '09:45', endDate: '2023-11-25', endTime: '16:00', important: true }
];

let isImportant = false;

function initTaskList() {
  const tasksTableBody = document.getElementById('taskRows');
  tasksTableBody.innerHTML = '';

  initialTasks.forEach((task, index) => {
    const row = tasksTableBody.insertRow();
    row.innerHTML = `<td>${task.taskName}</td>
                     <td>${task.startDate}</td>
                     <td>${task.startTime}</td>
                     <td>${task.endDate}</td>
                     <td>${task.endTime}</td>
                     <td>${task.important ? 'Important' : 'Not Important'}</td>
                     <td><button class="delete-button"onclick="deleteTask(${index})">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                     <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                   </svg>
                      </button></td>`;
  });
}

function deleteTask(taskIndex) {
  initialTasks.splice(taskIndex, 1);
  initTaskList();
}

function showHome() {
  document.getElementById('taskList').style.display = 'block';
  document.getElementById('addTaskForm').style.display = 'block';
  document.getElementById('home').style.display = 'block';
}

function toggleImportance() {
  isImportant = !isImportant;
  const toggleButton = document.querySelector('.toggle-button');
  toggleButton.textContent = isImportant ? 'Important' : 'Not Important';

}


function addTask() {
  const taskName = document.getElementById('taskName').value;
  const startDate = document.getElementById('startDate').value;
  const startTime = document.getElementById('startTime').value;
  const endDate = document.getElementById('endDate').value;
  const endTime = document.getElementById('endTime').value;
 
  if (!taskName || !startDate || !startTime || !endDate || !endTime) {
    alert('Please fill in all fields');
    return;
  }

  const tasksTableBody = document.getElementById('taskRows');
  const newRow = tasksTableBody.insertRow();
  newRow.innerHTML = `<td>${taskName}</td>
                      <td>${startDate}</td>
                      <td>${startTime}</td>
                      <td>${endDate}</td>
                      <td>${endTime}</td>
                      <td>${isImportant ? 'Important' : 'Not Important'}</td>
                      <td><button class="delete-button" onclick="deleteTask(${initialTasks.length})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    </svg>
                      </button></td>`;
  initialTasks.push({ taskName, startDate, startTime, endDate, endTime, important: isImportant });
  
  document.getElementById('taskName').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('startTime').value = '';
  document.getElementById('endDate').value = '';
  document.getElementById('endTime').value = '';
}

initTaskList();
