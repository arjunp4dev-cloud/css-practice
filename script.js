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

let toggle = document.getElementById("togglePrice");

let starter = document.getElementById("starterPrice");
let pro = document.getElementById("proPrice");

toggle.addEventListener("change", function(){

    if(toggle.checked){
        starter.innerText = "$100 /yr";
        pro.innerText = "$278 /yr";
    }else{
        starter.innerText = "$0 /mo";
        pro.innerText = "$29 /mo";
    }

});


/* todo */
let task = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task === ""){
alert("Enter a task");
return;
}

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

input.value="";

displayTasks();
}

function displayTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

let li = document.createElement("li");
li.innerHTML = task + 
` <button onclick="deleteTask(${index})">X</button>`;

list.appendChild(li);

});
}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks", JSON.stringify(tasks));

displayTasks();

}