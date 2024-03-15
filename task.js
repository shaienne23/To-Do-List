function addTask(e){
    const taskDiv = document.createElement("div")
    taskDiv.dataset.taskId = taskId

    const taskDescription = document.createElement("p")
    taskDescription.textContent = inputValue

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "RemoveTask"

    taskDiv.appendChild(taskDescription)
    taskDescription.appendChild(removeBtn)

    taskListContainer.appendChild(taskDiv)
}