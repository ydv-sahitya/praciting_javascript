const todoInputEL = document.querySelector(".todo__input");
const todoListEL = document.querySelector(".todo__list");
const todoItemELs = document.querySelectorAll(".todo__item");


function addListItem() {
    todoInputEL.addEventListener("keypress", function(event) {
         if (event.keyCode === 13) {
            let newListItem = createListItem(todoInputEL.value);
            // todoListEL.appendChild(newListItem)
            todoListEL.insertBefore(newListItem,todoListEL.childNodes[0])
            todoInputEL.value = "";
         }
    })
}

// look this topic. bubbling and propagation..

function toggleDone() {
    todoListEL.addEventListener("click",function(event){
        if (event.target.classList.contains("todo__item")){
            event.target.classList.toggle("done");
        }
    })
}

function createListItem(text) {
    const newListELement = document.createElement("li");
    newListELement.textContent = text;
    newListELement.setAttribute("class", "todo__item");
    return newListELement;
}


toggleDone();
addListItem();


// I will add remove button soon

