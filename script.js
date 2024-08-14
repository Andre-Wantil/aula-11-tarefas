let tasks = [];
const button = document.getElementById('addTaskButton');

function seeIt(result) {
    document.getElementById('taskList').innerHTML = result;
}

function addTask() {
    let inputValue = document.getElementById('taskInput').value;

    tasks.push(inputValue)
    console.log(tasks)

    let result = ``
    for (let i = 0; i < tasks.length; i++) {
        result += "<li>" + tasks[i] + `<button type='button'>X</button>` + "</li>"
    }

    seeIt(result);

    document.getElementById('taskInput').value = ''
}