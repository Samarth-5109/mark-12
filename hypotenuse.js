var sideA = document.querySelector("#side-a");
var sideB = document.querySelector("#side-b");
var calculateButton = document.querySelector("#calculate-hypotenuse");
var hypoOutput = document.querySelector("#result");

function calculateHypotenuse(){
    var lengthOfHypotenuse;
    var sideOne = Number(sideA.value);
    var sideTwo = Number(sideB.value);

    lengthOfHypotenuse = Math.sqrt((sideOne*sideOne) + (sideTwo*sideTwo));
    hypoOutput.innerText = "The Length of hypotenuse is " + lengthOfHypotenuse;
}

calculateButton.addEventListener("click", calculateHypotenuse);