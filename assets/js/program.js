window.addEventListener('load', function() {
    const taskForm = document.getElementById('add-task-form');
    const taskInput = document.getElementById('add-task-input');
    const listElement = document.getElementById('planner-tasks');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('success submit');
        const task = taskInput.value;

        if (!task)
        {
            alert("please add a value to the task add field");
            return;
        }
        
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = "text";
        taskInputElement.value = task;
        taskInputElement.setAttribute('readonly', 'readonly');

        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('buttons');

        const taskEditElement = document.createElement('button');
        taskEditElement.classList.add('edit-task');
        taskEditElement.innerText = "EDIT";

        const taskDeleteElement = document.createElement('button');
        taskDeleteElement.classList.add('delete-task');
        taskDeleteElement.innerText = "DELETE";

        taskActionsElement.appendChild(taskEditElement);
        taskActionsElement.appendChild(taskDeleteElement);
        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        taskInput.value = '';

        taskEditElement.addEventListener('click', function() {
            
            if(taskEditElement.innerText.toLowerCase() == 'edit')
            {
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus()
                taskEditElement.innerText = "Save";

            }
            else 
            {
                taskInputElement.setAttribute("readonly", "readonly");
                taskEditElement.innerText = "EDIT";
            }
        });

        taskDeleteElement.addEventListener('click', function() {
            listElement.removeChild(taskElement);
        });
    });
});