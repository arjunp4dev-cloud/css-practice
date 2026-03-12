 let count=0;

function increase(){
    count++;
    document.getElementById("count").innerText = count;
}

function decrease(){
    count--;
    document.getElementById("count").innerText=count;

}

let tasks = ["Study JavaScript", "Build Project", "Practice Coding", "Learn Django"];

let container = document.getElementById("taskContainer");

for (let i = 0; i < tasks.length; i++) {

    container.innerHTML += `
        <div>
            <p>${tasks[i]}</p>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
}

function deleteTask(button){
    button.parentElement.remove();
}