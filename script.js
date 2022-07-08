const rootElm = document.querySelector("#root");
const list = rootElm.querySelector(".list");
const enterButton = document.getElementById("enterButton");
const numOfItemsArr = [];
let numOfItemsCounter = 0;

  // Add new task
  enterButton.onclick = function (){
    numOfItemsArr.push(numOfItemsCounter);
    let showEdit = false;

    const newTask = document.getElementById("newTask").value;
    const todoItem = document.createElement("li");
    const newId = numOfItemsArr[numOfItemsCounter].toString();
    const container = document.createElement('div');
    container.className = "container";
    const description = document.createElement('span');
    description.setAttribute("id", "span");

    description.innerText = newTask;
    todoItem.id = newId;
    container.appendChild(description);
    todoItem.appendChild(container);

    
    // delete
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("bigBtn", "new-element");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
      // delete the li tag with id === newId
      const toDelete = document.getElementById(newId);
      toDelete.remove();
    }
    // append the deleteBtn to the new task
    container.appendChild(deleteBtn);


    // edit Task

    const showEditBtn = document.createElement("button");
    showEditBtn.classList.add("bigBtn", "new-element");
    showEditBtn.textContent = "Show edit";
    const editBtn = document.createElement("button");
    editBtn.classList.add("bigBtn", "new-element");
    editBtn.textContent = "Edit";

    const editTxt = document.createElement("input");
    editTxt.setAttribute("id", "editTxt");
    editTxt.classList.add("new-element");
    editTxt.placeholder = "Edit this task";


     // append the editBtn and input to the new task
     container.appendChild(showEditBtn);

    showEditBtn.onclick = function () {
      if(showEdit === false){
        const taskContents1 = document.getElementById(newId);
        const taskContents2 = taskContents1.querySelector("#span");
        container.appendChild(editTxt);
        container.appendChild(editBtn);
        editTxt.value = taskContents2.textContent;
        showEdit = true;
      }
      
      else{
        container.removeChild(editTxt);
        container.removeChild(editBtn);
        showEdit = false;
      }

      editBtn.onclick = function(){
        if(showEdit === true){
          const taskContents1 = document.getElementById(newId);
          const taskContents2 = taskContents1.querySelector("#span");
          taskContents2.textContent = editTxt.value;
          container.removeChild(editTxt);
          container.removeChild(editBtn);
        }
        showEdit = false;
        }
    }

    numOfItemsCounter++;
    list.append(todoItem);

  }
