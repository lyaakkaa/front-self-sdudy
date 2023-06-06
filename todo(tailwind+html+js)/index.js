document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const input = document.getElementById('todo-text');

    const todos = [];


    form.addEventListener('submit', function(event){
        event.preventDefault();

        const text = input.value;
        todos.push({text: text, completed: false});
        
        addTodoItemI();

    });
})