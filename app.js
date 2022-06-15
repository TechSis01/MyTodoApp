let todos= document.querySelector('#todos')
const addTaskBtn= document.querySelector('.input-btn')
const taskContainer = document.querySelector('.container')
const task = document.querySelector('#tasks-container')
const initialRemoveBtn = document.querySelector('.remove-task-btn')
const initialTask = document.querySelector('.tasks')
const message = document.createElement('p')
message.innerText = 'No tasks available....'

addTaskBtn.addEventListener('click',todoList)
function todoList(){
    const btn = document.createElement('button')
    btn.innerText = 'remove'
    btn.style.marginLeft = '67.7%'
    message.style.display = 'none'
    let activity = todos.value;
    let newLi = document.createElement('div');
    newLi.innerText = activity;
    newLi.classList.add('tasks')
    taskContainer.appendChild(newLi)
    btn.classList.add('remove-task-btn-js')
    newLi.append(btn)
    todos.value = ""
    btn.addEventListener('click',function(){
        newLi.remove()
        btn.remove()
        message.style.display = 'block'
    })
    
}
task.addEventListener('click',function(e){
    const target = e.target
    if(target.matches('div')){
      target.remove()
    }
})

initialRemoveBtn.addEventListener('click',function(){
    initialTask.style.display = 'none'
    task.appendChild(message)
})