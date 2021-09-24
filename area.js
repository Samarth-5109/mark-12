var triangleBase = document.querySelector("#base");
var triangleHeight = document.querySelector("#height");
var calculateAreaButton = document.querySelector("#area-btn");
var areaResult = document.querySelector("#area-of-triangle");


function calculateTriangleArea(){
    
    var base = Number(triangleBase.value);
    var height = Number(triangleHeight.value);
    var areaOfTriangle = 1/2*(base * height);
    console.log(areaOfTriangle);
    areaResult.innerText = "Area of triangle is: " + areaOfTriangle;
}

calculateAreaButton.addEventListener("click", calculateTriangleArea);