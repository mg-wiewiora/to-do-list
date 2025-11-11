{
    const tasks = [
        {
            content: "skończyć moduł",
            done: false,
        },
        {
            content: "zjeść obiad",
            done: true,
        },
    ];

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
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
             <li 
              class="list__taskBody${task.done ? " list__taskBody--done" : ""}"
             >
              <button class="list__taskButton list__taskButton--done js-done">✓</button> 
              ${task.content}
              <button class="list__taskButton js-delete">🗑</button>
             </li>
           `;
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;

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