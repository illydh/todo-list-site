const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
//  ADD TASK FUNCTION
    if(inputBox.value === ''){
    //  RED FLAG IF ATTEMPTING TO FILE AN EMPTY TEXT BOX
        alert("You must write something!");
    } else {
        let li = document.createElement("li");      //  CREATE NEW ITEM FOR UL IN HTML
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";                  //  STYLE FOR NEW TASK
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();    
}

listContainer.addEventListener("click", function(e){
    //  CHECK OFF TASK
    if(e.target.tagName === "LI"){
        //  IF TASK IS CLICKED, THEN CHECK OFF
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        //  IF TASK IS X'ED THEN REMOVE TASK FROM UL
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    //  SAVE DATA FOR WHEN SITE IS REFRESHED OR EXITED
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    //  SHOW TASK FOR WHEN WE RETURN
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();