/*var myHTML = document.querySelector('html');
myHTML.onclick = function(){
	alert('Keep Cool!');
}
var myHeading = document.querySelector('h1'); //querySelector kann man nutzen um eine Referenz zu einem Objekt zu schaffen
myHeading.textContent = 'Welcome!'; //textContent lässt der Variablen "myHeading" einen Wert  geben*/
"use strict"

//Im folgenden ein kurzer Test für eine Konsolenausgabe;
let konsolenAusgabe = "Dies ist eine Konsolenausgabe mit console.log";
console.log("Ich Teste eine Variable in der Konsole ausgeben zu lassen");
console.log(konsolenAusgabe);
let konsolen = "Test";
let info = "console.info";
console.info("Dies ist ein ", konsolen, "mit ", info);
//Test mit Konsolenausgabe zuende

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'bilder/roxybook.png'){
		myImage.setAttribute ('src','bilder/roxybookzwei.png');
	}else if (mySrc === 'bilder/roxybookzwei.png'){
		myImage.setAttribute ('src','bilder/roxybookdrei.png');
	}else if (mySrc === 'bilder/roxybookdrei.png'){
		myImage.setAttribute ('src', 'bilder/roxybookvier.png');
	}else{
		myImage.setAttribute ('src','bilder/roxybook.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Write your name.');//promt() öffnet eine Dialogbox wo etwas eingegeben werden kann
	localStorage.setItem('name', myName); //localStorage speichert Daten im Browser welche man später wieder aufrufen kann
	myHeading.textContent = 'The world of Roxy Book with ' + myName;
}
if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'The world of Roxy Book with ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
