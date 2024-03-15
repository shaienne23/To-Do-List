const createTaskForm = document.getElementById("createTaskForm")
const taskInput = document.getElementById("taskInput")

let taskList = []

createTaskForm.addEventListener("submit", (e) => addTask(e))

function addTask(e){

    e.preventDefault()
    const inputValue = taskInput.value

    taskList.push(inputValue)
    taskInput.value = ""

    const taskDiv = document.createElement("div")
    const taskDescription = document.createElement("p")
    taskDescription.textContent = inputValue

    taskDiv.appendChild(taskDescription)
    taskListContainer.appendChild(taskDiv)

    
}