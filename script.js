
function displayQuestion () {
    var questionSection = document.querySelector("#question-section");
    questionSection.style.display = "block";
}

function displayQuestion2 () {
    var questionSection2 = document.querySelector("#question-section2");
    questionSection2.style.display ="block" ;

} 

function displayQuestion3 () {
    var questionSection3 = document.querySelector
    ("#question-section3");
    questionSection3.style.display ="block" ;
}

var startButton = document.querySelector("#start-btn");
var nextQuestion = document.querySelector("#next-question")
var nextQuestion2 = document.querySelector("#next-question2")

startButton.addEventListener("click", displayQuestion)
nextQuestion.addEventListener("click", displayQuestion2 )
nextQuestion2.addEventListener("click", displayQuestion3 )