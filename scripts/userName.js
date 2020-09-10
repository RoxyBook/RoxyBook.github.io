function UserName() {
    this.myButton = document.querySelector('button');
    this.myHeading = document.querySelector('h1');

    this.myButton.addEventListener("click", () => this.setUserName());
}

UserName.prototype.userName = function () {
    if (!localStorage.getItem('name')) {
        this.setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        this.myHeading.textContent = 'The world of Roxy Book with ' + storedName;
    }
}
UserName.prototype.setUserName = function () {
    let myName = prompt('Write your name.');//promt() öffnet eine Dialogbox wo etwas eingegeben werden kann
    localStorage.setItem('name', myName); //localStorage speichert Daten im Browser welche man später wieder aufrufen kann, "name" ist der Schlüssel für myName
    this.myHeading.textContent = 'The world of Roxy Book with ' + myName;
}
