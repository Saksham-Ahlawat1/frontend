// select elements 
const  input=document.getElementById("task input")
const  addBtn=document.getElementById("addbtn")
 const taskList=document.getElementById("tasklist")

 addBtn.addEventListener("click",function(){
    const taskText=input.value.trim();
    if(taskText==="") return;
    createTaskElement (taskText);
    saveTask(taskText);
    input.value="";
 });
 //create task in dom ; 
 function createTaskElement(taskText){
    const li=document.createElement("li");
    const span=document.createElement("span") ;
    span.textContent=taskText ;
 }
 //edit button ;
   const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Edit your task:", span.textContent);
        if (newText) {
            span.textContent = newText;
            updateTask(taskText, newText);
        }
    };
    //delete button ;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
