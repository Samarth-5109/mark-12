var sideA = document.querySelector("#side-a");
var sideB = document.querySelector("#side-b");
var calculateButton = document.querySelector("#calculate-hypotenuse");
var hypoOutput = document.querySelector("#result");

function calculateHypotenuse(){
    var lengthOfHypotenuse;
    var sideOne = Number(sideA.value);
    var sideTwo = Number(sideB.value);
    if(sideOne=="" || sideTwo=="" || sideOne<0 || sideTwo<0){
        hypoOutput.innerText = "Sides should not be empty, negative and 0 ";
    }else{
        lengthOfHypotenuse = Math.sqrt((sideOne*sideOne) + (sideTwo*sideTwo));
    hypoOutput.innerText = "The Length of hypotenuse is " + lengthOfHypotenuse;
    }

    
}

calculateButton.addEventListener("click", calculateHypotenuse);