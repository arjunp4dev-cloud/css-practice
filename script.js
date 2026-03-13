 let count=0;

function increase(){
    count++;
    document.getElementById("count").innerText = count;
}

function decrease(){
    count--;
    document.getElementById("count").innerText=count;

}
/*deleting*/

let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    tasks.push(task);   

    showTasks();       

    input.value = "";  
}

function showTasks(){

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        list.innerHTML += `
            <p>
                ${tasks[i]}
                <button onclick="deleteTask(${i})">Delete</button>
            </p>
        `;
    }
}

function deleteTask(index){

    tasks.splice(index,1);

    showTasks();
}