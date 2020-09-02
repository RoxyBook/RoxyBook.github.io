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
let calculator = new Calculator();
calculator.mathProblem();

let todo = new Todo();
todo.zeichneListe();


window.addEventListener("mousemove", function (event) {

    let x = event.offsetX;
    let y = event.offsetY;
    console.log(x + "/" + y);
    console.log("Maus bewegt");
});