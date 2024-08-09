let mainContainer = document.querySelector(".mainInsideContainer")

function togglePopup(event) {
    event.preventDefault();
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

let addBtn = document.getElementById("btn-addtask-submit");

function addData(event) {
    event.preventDefault();
    let inputText = document.getElementById("task").value;
   
    if (inputText === "") {
        alert("Add Task before clicking submit")
    }
    else {
        let divCards = document.createElement("div")
        divCards.className = "task-cards"

        let spanCheck = document.createElement("span")
        spanCheck.className = "unchecked"
        spanCheck.setAttribute("onClick", "checkedBox(event)")

        let taskText = document.createElement("p")
        taskText.innerHTML = inputText;

        let spanTag = document.createElement("span")
        spanTag.setAttribute("onClick", "deleteData(event)")

        let deleteImg = document.createElement("img")
        deleteImg.src = "static/bin.png"

        mainContainer.append(divCards)
        divCards.append(spanCheck)
        divCards.append(taskText)
        divCards.append(spanTag)
        spanTag.append(deleteImg)
        saveData()
        togglePopup(event);
    }
}

function saveData() {
    localStorage.setItem("data", mainContainer.innerHTML)
    let inputField = document.getElementById("task")
    inputField.value = ""
}

function getData() {
    let data = localStorage.getItem("data")
    mainContainer.innerHTML = data
}

getData()

function deleteData(event) {
    event.preventDefault();
    event.target.parentElement.parentElement.remove();
    saveData()
    getData()
}

function checkedBox(event) {
    event.preventDefault();
    event.target.classList.toggle("checked")
    event.target.nextSibling.classList.toggle("mainContent-text-para")
    event.target.parentElement.classList.toggle("div-cards-done")
    saveData()
}
