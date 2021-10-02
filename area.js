var triangleBase = document.querySelector("#base");
var triangleHeight = document.querySelector("#height");
var calculateAreaButton = document.querySelector("#area-btn");
var areaResult = document.querySelector("#area-of-triangle");


function calculateTriangleArea(){
    
    var base = Number(triangleBase.value);
    var height = Number(triangleHeight.value);
    if(base=="" || height=="" || base<0 || height<0){
        areaResult.innerText = "Sides should not be empty, negative and 0 ";
    }else{
        var areaOfTriangle = 1/2*(base * height);
    
        areaResult.innerText = "Area of triangle is: " + areaOfTriangle;
    }
    
}

calculateAreaButton.addEventListener("click", calculateTriangleArea);