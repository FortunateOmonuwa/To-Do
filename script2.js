class ToDoManager{

    constructor(){
        this.addBtn = document.querySelector("#add-btn");
        this.newTaskInput = document.getElementById("task-input");
        this.taskContainer = document.querySelector("#tasks");
        this.error = document.getElementById("error");
        this.countValue = document.querySelector(".count-value");

        this.addBtn.addEventListener('click', this.addTask.bind(this));
        this.taskCount = 0;
        this.newTaskInput.value = "";
        //this.initializePage();

        
    }

    displayCount(){
        this.countValue.innerHTML = this.taskCount;
    }

    addTask(){
        const taskName = this.newTaskInput.value.trim();
        this.error.style.display = "none";

        if(!taskName){
            setTimeout(()=>{
                this.error.style.display = "block";
            }, 100);

        }

        else{
            const newTask = 
            `<div class=task>
                <input type="checkbox" class="task-check">
                <span class="taskname">${taskName}</span>

                <button class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`

            this.taskContainer.insertAdjacentHTML("beforeend", newTask);
            this.taskCount += 1;
            this.displayCount(this.taskCount);
            this.newTaskInput.value = "";


            //called there delete and edit methods
            this.deleteAction();
            this.editAction();
            this.taskCheckBox()
           
        };
    };

    deleteAction(){
        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((btn) => {
            btn.onclick = ()=> {
                btn.parentNode.remove();
                this.taskCount -= 1;
                this.displayCount(this.taskCount);
            };
        });
    };


    editAction(){
        const editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((btn) => {
            btn.onclick = ()=>{
                this.newTaskInput.value = btn.previousElementSibling.innerText;
                btn.parentNode.remove();
                this.taskCount -= 1;
                this.displayCount(this.taskCount);
            };
        });
    };

    taskCheckBox(){
        const tasks = document.querySelectorAll(".task-check");
        tasks.forEach((task) => {
            task.addEventListener('change', ()=>{

                if(task.checked){
                    task.nextElementSibling.classList.add("completed");
                    this.displayCount(this.taskCount -= 1);
                }
                else{
                    task.nextElementSibling.classList.remove("completed");
                    this.displayCount(this.taskCount += 1);
                }          
            });
        })
    };

    // initializePage(){
    //     window.onload = () =>{
    //         this.taskCount = 0;
    //         this.displayCount(this.taskCount);
    //         this.newTaskInput.value = "";
    //     }
    // }
};


const manager = new ToDoManager();