{
    const tasks = [];

    const addTask = (taskInput) => {
        tasks.push({
            content: taskInput,
        });

        render();
    };

    const deleteTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const triggerEvents = () => {
        const deleteButtons = document.querySelectorAll(".js-delete");

        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                deleteTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let taskHTMLContent = "";

        for (const task of tasks) {
            taskHTMLContent += `
             <li 
              class="list__taskBody js-task"
             >
              <button class="list__taskButton list__taskButton--checkMark js-done">
               ${task.done ? "✓" : ""}
              </button> 
              <span class="list__taskContent${task.done ? " list__taskContent--done" : ""}">
               ${task.content}</span>
              <button class="list__taskButton list__taskButton--delete js-delete">
              🗑
              </button>
             </li>
           `;
        }

        document.querySelector(".js-taskList").innerHTML = taskHTMLContent;

        triggerEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const taskInput = document.querySelector(".js-taskInput").value.trim();

        if (taskInput === "") {
            return;
        }

        addTask(taskInput);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
    };

    init();
}