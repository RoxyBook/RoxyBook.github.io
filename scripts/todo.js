function Todo() {
    this.toDoList = document.querySelector("#toDo");
    this.liste = [];
    this.toDoListFunction = document.querySelector("#toDoListFunction");
    this.roxy = document.querySelector("#roxy");

    this.doButton = document.querySelector("#doButton");
    this.toDoButton = document.querySelector("#whatDoYouWantToDo");
    this.deleteButton = document.querySelector("#delete");
    this.backButton = document.querySelector("#back");
//Damit die Buttons gehen
    this.doButton.addEventListener("click", () => this.showToDoListFunction());

    this.toDoButton.addEventListener("click", () => this.setToDo());

    this.deleteButton.addEventListener("click", () => this.deleteTodo());

    this.backButton.addEventListener("click", () => this.back());
}

Todo.prototype.setToDo = function () {
    let myToDo = prompt("Write your todo.");//promt() öffnet eine Dialogbox wo etwas eingegeben werden kann

    if (myToDo !== "" && myToDo !== null) {
        this.liste.push(myToDo);
        localStorage.setItem("toDoList", JSON.stringify(this.liste));
        let newPoint = document.createElement("li");
        this.toDoList.appendChild(newPoint);
        newPoint.textContent = myToDo;
    }
}

Todo.prototype.deleteTodo = function () {
    let numberOfTodo = prompt("Which todo should be deleted?");
    let intIndex = parseInt(numberOfTodo, 10);//Wenn die letzte Zahl weg gelassen wird, wird automatisch das 10er-System genutzt
    let deleteIndex = (intIndex - 1);
    if (!isNaN(deleteIndex)) {
        this.liste.splice(deleteIndex, 1);
        localStorage.setItem("toDoList", JSON.stringify(this.liste));
        let listItemIndex = this.toDoList.getElementsByTagName("li").item(deleteIndex);
        this.toDoList.removeChild(listItemIndex);
    }
}

//Damit die Liste angezeigt wird nachdem die Seite neu aufgerufen wurde
Todo.prototype.zeichneListe = function () {
    let doit = localStorage.getItem("toDoList");
    if (doit != null) {
        this.liste = JSON.parse(doit);
        for (let i = 0; i < this.liste.length; i++) {
            let newp = document.createElement("li");
            this.toDoList.appendChild(newp);
            newp.textContent = this.liste[i];
        }
    }
}

Todo.prototype.showToDoListFunction = function () {
    this.toDoListFunction.classList.remove("hidden");
    this.roxy.classList.add("hidden");
}

Todo.prototype.back = function () {
    this.toDoListFunction.classList.add("hidden");
    this.roxy.classList.remove("hidden");
}