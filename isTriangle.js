var angleInput = document.querySelectorAll(".angle-input");
var calculateButton = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");



function sumOfAllAngles(angle1, angle2, angle3){
    var sum  =  Number(angle1 + angle2 + angle3);
    return sum;
    
}

function knowIsATriangle(){
  var anglesSum =  sumOfAllAngles(Number (angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
   
  if(anglesSum === 180){
     output.innerText = "The entered angles form a triangle";
  }else{
     output.innerText= "The entered angles do not form a triangle";
  }
}

calculateButton.addEventListener("click", knowIsATriangle);
