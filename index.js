let task = document.getElementById("task");
let priority = document.getElementById("priority");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody"); 

let todoList = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(task.value);
    console.log(priority.value);
    let obj = {};
    obj.task = task.value
    obj.priority = priority.value
    todoList.push(obj);

    console.log(todoList);
    tbody.innerHTML = null;

    todoList.map((ele)=>{
        let newRow = document.createElement("tr");
        let data1 = document.createElement("td");
        let data2 = document.createElement("td");
        let data3 = document.createElement("td");

        data1.innerText = ele.task;
        data2.innerText = ele.priority;
        data3.innerHTML = "<button>Favourite</button>";

        if(ele.priority == "High"){
            data2.setAttribute("class", "red");
        }else{
            data2.setAttribute("class", "green");
        }

        newRow.append(data1, data2, data3);
        tbody.append(newRow);
    });
    

});