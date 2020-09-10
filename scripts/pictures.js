/*Mit Funktion und Klasse
function Pictures() {
    this.myImage = document.querySelector('img');
    this.myImage.addEventListener("click", () => this.profilPictures());//unterschied onclick function und addEventListener?-> onclick kann es nur einen geben mit der entsprechenden funktion und wird überschrieben. EventListener kann es mherere geben.

}

Pictures.prototype.profilPictures = function () {
    let mySrc = this.myImage.getAttribute('src');
    if (mySrc === 'bilder/roxybook.png') {
        this.myImage.setAttribute('src', 'bilder/roxybookzwei.png');
    } else if (mySrc === 'bilder/roxybookzwei.png') {
        this.myImage.setAttribute('src', 'bilder/roxybookdrei.png');
    } else if (mySrc === 'bilder/roxybookdrei.png') {
        this.myImage.setAttribute('src', 'bilder/roxybookvier.png');
    } else {
        this.myImage.setAttribute('src', 'bilder/roxybook.png');
    }
}*/

//Mit Funktion ohne Klasse

window.myImage = document.querySelector('img');
window.myImage.addEventListener("click", () => profilPictures());

function profilPictures() {
    let mySrc = window.myImage.getAttribute('src');
    if (mySrc === 'bilder/roxybook.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookzwei.png');
    } else if (mySrc === 'bilder/roxybookzwei.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookdrei.png');
    } else if (mySrc === 'bilder/roxybookdrei.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookvier.png');
    } else {
        window.myImage.setAttribute('src', 'bilder/roxybook.png');
    }
}

/*mit anonymer arrowfunktion

window.myImage = document.querySelector('img');
window.myImage.addEventListener("click", () => {
    let mySrc = window.myImage.getAttribute('src');
    if (mySrc === 'bilder/roxybook.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookzwei.png');
    } else if (mySrc === 'bilder/roxybookzwei.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookdrei.png');
    } else if (mySrc === 'bilder/roxybookdrei.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookvier.png');
    } else {
        window.myImage.setAttribute('src', 'bilder/roxybook.png');
    }
});*/


/*onclick=attribut, kann wie jede Variable überschrieben werden.

window.myImage = document.querySelector('img');
window.myImage.onclick = function () {
    let mySrc = window.myImage.getAttribute('src');
    if (mySrc === 'bilder/roxybook.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookzwei.png');
    } else if (mySrc === 'bilder/roxybookzwei.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookdrei.png');
    } else if (mySrc === 'bilder/roxybookdrei.png') {
        window.myImage.setAttribute('src', 'bilder/roxybookvier.png');
    } else {
        window.myImage.setAttribute('src', 'bilder/roxybook.png');
    }
};*/