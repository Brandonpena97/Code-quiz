
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

function displayQuestion4 () {
    var questionSection4 = document.querySelector("#question-section4");
    questionSection4.style.display ="block";
}

function displayQuestion5 () {
    var questionSection5 = document.querySelector("#question-section5")
    questionSection5.style.display="block";
}

var startButton = document.querySelector("#start-btn");
var nextQuestion = document.querySelector("#next-question")
var nextQuestion2 = document.querySelector("#next-question2")
var nextQuestion3 = document.querySelector("#next-question3")
var nextQuestion4 = document.querySelector("#next-question4")

startButton.addEventListener("click", displayQuestion)
nextQuestion.addEventListener("click", displayQuestion2 )
nextQuestion2.addEventListener("click", displayQuestion3 )
nextQuestion3.addEventListener("click",displayQuestion4)
nextQuestion4.addEventListener("click",displayQuestion5)