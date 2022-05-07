let inputText = document.querySelector("#text");
let root = document.querySelector("ul");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let allTodos = [];

function handleInput(event){
    if(event.keyCode === 13 && event.target.value !== ""){
        let todo = {
            name: event.target.value,
            isDone: false
        };
        allTodos.push(todo);
        event.target.value = "";
        createUI();
    } 
}

function handleToggle(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone;
    createUI();
}

function handleDelete(event){
    let id = event.target.dataset.id;
    allTodos.splice(id, 1 )
    createUI();
}

function createUI(data = allTodos){
    root.innerHTML = "";
    data.forEach((todo,i) =>{
        let li = document.createElement("li");
        li.classList.add("flex");
        let input = document.createElement("input");
        input.type = ("checkbox");
        input.setAttribute("data-id",i)
        input.addEventListener("input",handleToggle)
        input.checked = todo.isDone;
        let p = document.createElement("p");
        p.innerText = todo.name;
        let span = document.createElement("span");
        span.innerText = "❌";
        span.setAttribute("data-id",i)
        span.addEventListener("click",handleDelete)

        li.append(input,p,span);
        root.append(li);
    })
    
}

all.addEventListener("click", () =>{
    let fullDetail = allTodos.map((todo) => todo);
    createUI(fullDetail);
});

active.addEventListener("click", () => {
    let remaining = allTodos.filter((todo) => !todo.isDone );
    createUI(remaining);
});

completed.addEventListener("click", () =>{
    let complete = allTodos.filter((todo) => todo.isDone);
    createUI(complete);
});

clear.addEventListener("click", () => {
    let clr = allTodos.filter((todo) => !todo);
    createUI(clr);
})

inputText.addEventListener("keyup", handleInput)
