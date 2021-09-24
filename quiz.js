var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector("#submit-btn");
var quizOutput  = document.querySelector("#output");

var answers =   ["90", "right angled"];

function calculateScore(){
    var score  = 0;
    var index = 0;
    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if(value === answers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    quizOutput.innerText = "Your score is: " + score;
}
    submitButton.addEventListener("click", calculateScore)