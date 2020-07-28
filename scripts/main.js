/*var myHTML = document.querySelector('html');
myHTML.onclick = function(){
	alert('Keep Cool!');
}
var myHeading = document.querySelector('h1'); //querySelector kann man nutzen um eine Referenz zu einem Objekt zu schaffen
myHeading.textContent = 'Welcome!'; //textContent lässt der Variablen "myHeading" einen Wert  geben*/

"use strict"//wird das so in der Praxis genutzt?

//Im folgenden ein kurzer Test für eine Konsolenausgabe;
let konsolenAusgabe = "Dies ist eine Konsolenausgabe mit console.log";
console.log("Ich Teste eine Variable in der Konsole ausgeben zu lassen");
console.log(konsolenAusgabe);
let konsolen = "Test";
let info = "console.info";
console.info("Dies ist ein ", konsolen, "mit ", info);
//Test mit Konsolenausgabe zuende

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'bilder/roxybook.png') {
        myImage.setAttribute('src', 'bilder/roxybookzwei.png');
    } else if (mySrc === 'bilder/roxybookzwei.png') {
        myImage.setAttribute('src', 'bilder/roxybookdrei.png');
    } else if (mySrc === 'bilder/roxybookdrei.png') {
        myImage.setAttribute('src', 'bilder/roxybookvier.png');
    } else {
        myImage.setAttribute('src', 'bilder/roxybook.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Write your name.');//promt() öffnet eine Dialogbox wo etwas eingegeben werden kann
    localStorage.setItem('name', myName); //localStorage speichert Daten im Browser welche man später wieder aufrufen kann
    myHeading.textContent = 'The world of Roxy Book with ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The world of Roxy Book with ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

function calculater() {

    let randomNumberOne = Math.floor(Math.random() * 10 + 1); //random gibt uns nur Zahlen zwischen 0 und 1. Um Zahlen zwischen 0 und 9 zu bekommen, muss mit 10 multipliziert werden, +1 sorgt dafür, dass auch die 10 genutzt werden kann. floor() ignoriert die Nachkommastellen
    let randomNumberTwo = Math.floor(Math.random() * 10 + 1);
    let rechnung = document.createElement("div");
    rechnung.id = "calculater";
    //rechnung.setAttribute("id", "calculater"); -> alternative auch für andere Attribute
    rechnung.textContent = "Berechne: " + randomNumberOne + " + " + randomNumberTwo + " = " + (randomNumberOne + randomNumberTwo);
    document.querySelector("#calculaterIntroduction").after(rechnung);
}

calculater();

let toDoButton = document.querySelector("#whatDoYouWantToDo");
let toDoList = document.querySelector("#toDo");
let liste = [];

function setToDo() {
    let myToDo = prompt("Write your todo.");//promt() öffnet eine Dialogbox wo etwas eingegeben werden kann

    if (myToDo !== "" && myToDo !== null) {
        liste.push(myToDo);
        localStorage.setItem("toDoList", JSON.stringify(liste));
        let newPoint = document.createElement("li");
        toDoList.appendChild(newPoint);
        newPoint.textContent = myToDo;
    }
}

//let x = function(){}; function setToDo (){}
//Damit der Button geht
toDoButton.onclick = function () { // toDoButton.onclick = setToDo;
    setToDo();
}

//Damit die Liste angezeigt wird nachdem die Seite neu aufgerufen wurde
function zeichneListe() {
    let doit = localStorage.getItem("toDoList");
    if (doit != null) {
        liste = JSON.parse(doit);
        for (let i = 0; i < liste.length; i++) {
            let newp = document.createElement("li");
            toDoList.appendChild(newp);
            newp.textContent = liste[i];
        }
    }
}

zeichneListe();

let deleteButton = document.querySelector("#delete");

deleteButton.onclick = function () {
    deleteTodo();
}

function deleteTodo() {
    let numberOfTodo = prompt("Which todo should be deleted?");
    let intIndex = parseInt(numberOfTodo, 10);//Wenn die letzte Zahl weg gelassen wird, wird automatisch das 10er-System genutzt
    let deleteIndex = (intIndex - 1);
    if (!isNaN(deleteIndex)) {
        liste.splice(deleteIndex, 1);
        localStorage.setItem("toDoList", JSON.stringify(liste));
        let listItemIndex = toDoList.childNodes.item(deleteIndex);
        toDoList.removeChild(listItemIndex);
        let allToDo = document.getElementById("toDo");
        while (allToDo.firstChild) {
            allToDo.removeChild(allToDo.lastChild);
        }
        zeichneListe();
    }
}

window.addEventListener("mousemove", function (event) {

    let x = event.offsetX;
    let y = event.offsetY;
    console.log(x + "/" + y);
    console.log("Maus bewegt");
});