document.addEventListener('DOMContentLoaded', function() {
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
const taskText = taskInput.value.trim();
if (taskText === '') {
            alert('Please enter a task');
            return;   
        }    
const listItem = document.createElement('li');
listItem.textContent = taskText; 
listItem.addEventListener('click', function() {
listItem.classList.toggle('completed'); 
});
    
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete'; 
deleteButton.addEventListener('click', function() {
taskList.removeChild(listItem); 
        });
const editButton = document.createElement('button');
editButton.textContent = 'Edit'; 
editButton.addEventListener('click', function() {
const newTaskText = prompt('Edit your task:', listItem.textContent.replace('EditDelete', '').trim());
if (newTaskText !== null && newTaskText.trim() !== '') {
listItem.firstChild.textContent = newTaskText; }
 });
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);
taskList.appendChild(listItem);
taskInput.value = '';   
    });
});   





