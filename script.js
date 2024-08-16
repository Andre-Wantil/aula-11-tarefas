// Constante que armazena a lista
let tasks = [];

// Função que mostra a lista
function seeList() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        taskListElement.innerHTML += `
        <li>
        ${i + 1}. ${tasks[i]}
        <button type='button' onclick='remove(${i})'>X</button>
        </li>
        `
    }
}

// Função que adiciona tarefas à lista
function addTask(list, newTask) {

    if (newTask && !(newTask.includes("  ")) && newTask.length > 2) {
        list.push(newTask);
        seeList();
        document.getElementById('taskInput').value = '';
    }
}

// Função que cria um evento ao pressionar o botão na página
document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    addTask(tasks, task);
})

// Função para deletar a tarefa
function remove(id) {
    tasks.splice(id, 1)

    seeList()
}