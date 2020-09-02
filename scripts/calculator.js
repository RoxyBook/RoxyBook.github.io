function Calculator() {
    this.randomNumberOne = 0;
    this.randomNumberTwo = 0;

    this.resultButton = document.querySelector("#result");
    this.resultButton.addEventListener("click", () => this.setResult());

    this.newExerciseButton = document.querySelector("#newIntroduction");
    this.newExerciseButton.addEventListener("click", () => this.newExercise());
}

Calculator.prototype.giveRandomNumber = function () {
    return Math.floor(Math.random() * 10 + 1);
}

Calculator.prototype.mathProblem = function () {
    let rechnung = document.createElement("div");
    this.randomNumberOne = this.giveRandomNumber();
    this.randomNumberTwo = this.giveRandomNumber();

    rechnung.id = "calculator"; //rechnung.setAttribute("id", "calculator"); -> alternative auch für andere Attribute
    rechnung.textContent = "Calculate: " + this.randomNumberOne + " + " + this.randomNumberTwo + " = " + "?";
    document.querySelector("#calculatorIntroduction").after(rechnung);

}

Calculator.prototype.setResult = function () {
    let yourResult = prompt("Write your result!");
    this.resultOfCalculator(yourResult);
}

Calculator.prototype.resultOfCalculator = function (yourResult) {
    let result = document.createElement("div");
    result.classList.add("result");
    result.textContent = "Your result: " + yourResult;
    document.querySelector("#allResults").appendChild(result);

    let rightResult = document.createElement("div");
    rightResult.classList.add("result");

    let thisResult = this.randomNumberTwo + this.randomNumberOne;
    rightResult.textContent = "Result " + this.randomNumberOne + " + " + this.randomNumberTwo + " = " + (thisResult);
    document.querySelector("#allResults").appendChild(rightResult);

    let theyResult = parseInt(yourResult, 10);

    if (theyResult === thisResult) {
        result.classList.add("right");
        result.classList.remove("false");
    } else {
        result.classList.add("false");
        result.classList.remove("right");
    }
}
Calculator.prototype.newExercise = function () {
    let allResults = document.querySelector("#allResults");
    let removeResults = allResults.children;
    for (let i = removeResults.length - 1; i >= 0; i--) {
        allResults.removeChild(removeResults[i]);
    }
    let body = document.querySelector("body");
    body.removeChild(document.getElementById("calculator"));

    this.mathProblem();
}

