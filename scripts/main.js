"use strict"

this.menuButton = document.querySelector("#menuButton");


let user = new UserName();
user.userName();


this.menuButton.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
});