const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.getElementById("task-input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;


const displayCount = (taskCount) => {
    countValue.innerHTML = taskCount;
};

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    } 
    else {
        const task = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname">${taskName}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
        </div>`;

        taskContainer.insertAdjacentHTML("beforeend", task);
        taskCount+=1;
        displayCount(taskCount);
        newTaskInput.value = "";
        
    }

    deleteAction();
    taskCheckBox();

    editAction();  
}; 

addBtn.addEventListener("click", addTask);

///const tasks = document.querySelectorAll('.task');


//Delete button function
const deleteAction = () => {
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = ()=> {
            button.parentNode.remove();
            taskCount-=1;
            displayCount(taskCount);
        };
    });
};

// const deleteAction = () =>{
//     taskContainer.addEventListener('click', (e) =>{
//         const currentDelBtn = e.target;
//         if(currentDelBtn.classList.contains('delete')){
//             currentDelBtn.parentNode.remove();
//             taskCount-= 1;
//             displayCount(taskCount);
//         }

//     })
// }



//Edit button function
const editAction = () => {
    const editBtns = document.querySelectorAll('.edit');
    editBtns.forEach((btn) => {
   
        btn.onclick = ()=> {
            newTaskInput.value = btn.previousElementSibling.innerText;
            btn.parentNode.remove();
            taskCount-=1;
            displayCount(taskCount);
        };       
    });
};




//Checkbox ticking for task completion
const taskCheckBox = () => {
    const tasksCheck = document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkbox) =>{
        checkbox.addEventListener('change', () =>{
            checkbox.nextElementSibling.classList.toggle("completed");
            if(checkbox.checked){
                taskCount-=1;
                displayCount(taskCount);
            }
            else{
                displayCount(taskCount+=1 );
            }
        })  
    });
    //displayCount(taskCount+=1)

    newTaskInput.value = "";
};



window.onload = ()=> {
    taskCount = 0;
    displayCount(taskCount);

    newTaskInput.value="";
}

