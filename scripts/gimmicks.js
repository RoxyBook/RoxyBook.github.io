/*function Gimmicks() {

}*/

window.addEventListener("mousemove", function (event) {

    let x = event.offsetX;
    let y = event.offsetY;
    console.log(x + "/" + y);
    console.log("Maus bewegt");
});

//Im folgenden ein kurzer Test für eine Konsolenausgabe;
let konsolenAusgabe = "Dies ist eine Konsolenausgabe mit console.log";
console.log("Ich Teste eine Variable in der Konsole ausgeben zu lassen");
console.log(konsolenAusgabe);
let konsolen = "Test";
let info = "console.info";
console.info("Dies ist ein ", konsolen, "mit ", info);
//Test mit Konsolenausgabe zuende