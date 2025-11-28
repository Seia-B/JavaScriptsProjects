// Get elements
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const todosDiv = document.getElementById('todos');

// Load todos from localStorage when page loads
let todos = loadTodos();

// Display existing todos
displayTodos();

// Add event listener to button
addButton.addEventListener('click', addTodo);

// Add event listener for Enter key
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Function to add a new todo
function addTodo() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Add to todos array
    todos.push({
        id: Date.now(),
        text: taskText,
        completed: false
    });
    
    // Save to localStorage using JSON.stringify()
    saveTodos();
    
    // Clear input
    taskInput.value = '';
    
    // Display updated todos
    displayTodos();
}

// Function to display todos
function displayTodos() {
    todosDiv.innerHTML = '';
    
    if (todos.length === 0) {
        todosDiv.innerHTML = '<p style="color: #999;">No tasks yet. Add one above!</p>';
        return;
    }
    
    const ul = document.createElement('ul');
    ul.style.padding = '0';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';
        li.style.color = todo.completed ? '#999' : '#000';
        li.style.cursor = 'pointer';
        li.style.marginBottom = '10px';
        
        li.textContent = todo.text;
        
        // Toggle completed on click
        li.addEventListener('click', function() {
            toggleTodo(todo.id);
        });
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.fontSize = '20px';
        deleteBtn.style.color = 'red';
        deleteBtn.style.background = 'none';
        deleteBtn.style.border = 'none';
        deleteBtn.style.cursor = 'pointer';
        
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            deleteTodo(todo.id);
        });
        
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
    
    todosDiv.appendChild(ul);
}

// Function to toggle todo completion
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    
    saveTodos();
    displayTodos();
}

// Function to delete a todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    displayTodos();
}

// Save todos to localStorage using JSON.stringify()
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage using JSON.parse()
function loadTodos() {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
}