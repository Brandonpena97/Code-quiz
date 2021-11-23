
function displayQuestion() {
    var questionSection = document.querySelector(".question-section");
    questionSection.style.display = "block";
    var welcomeMain = document.querySelector("#welcome-message");
    welcomeMain.style.display = "none";

    var myTimerElement = document.querySelector("#timer");
    var timer = 75;
    var countdownTimer;

   countdownTimer = setInterval(function () {
        console.log(timer);
        myTimerElement.textContent = timer;

        if(timer <=0) {
            clearInterval(countdownTimer);
        }

        timer--;
    }, 1000)
}

function displayQuestion2 (event) {
    console.log(event.target.textContent)

    // check if the user selected the correct answer
    var selectedAnswer = event.target.textContent;
    var correctAnswer = "HyperText Markup Language";

    var statusEl = document.querySelector("#status");

    if (selectedAnswer == correctAnswer){
        statusEl.textContent = "Correct!"
    } else {
        statusEl.textContent = "Wrong!"
    }

    // show the next question
    var questionSection2 = document.querySelector(".question-section2");
    questionSection2.style.display = "block";
}

function displayQuestion3 (event) {
    console.log(event.target.textContent)

    var selectedAnswer = event.target.textContent;
    var correctAnswer = "Cascading Style Sheet";

    var status2El = document.querySelector("#status2")

    if (selectedAnswer == correctAnswer){
        status2El.textContent = "Correct!"
    } else {
        status2El.textContent = "Wrong!"
    }

    var questionSection3 = document.querySelector
        (".question-section3");
    questionSection3.style.display = "block";
}

function displayQuestion4 (event) {
    console.log(event.target.textContent)

    var selectedAnswer = event.target.textContent;
    var correctAnswer = "Document Object Model";

    var status3El = document.querySelector("#status3")

    if (selectedAnswer == correctAnswer){
        status3El.textContent = "Correct!"
    } else {
        status3El.textContent = "Wrong!"
    }

    var questionSection4 = document.querySelector(".question-section4");
    questionSection4.style.display = "block";
}

function displayQuestion5 (event) {
    console.log(event.target.textContent)

    var selectedAnswer = event.target.textContent;
    var correctAnswer = "700";

    var status4El = document.querySelector("#status4")

    if (selectedAnswer == correctAnswer){
        status4El.textContent = "Correct!"
    } else {
        status4El.textContent = "Wrong!"
    }

    var questionSection5 = document.querySelector(".question-section5");
    questionSection5.style.display = "block";
}

function displayHighscores (event) {
    console.log(event.target.textContent)

    var selectedAnswer = event.target.textContent;
    var correctAnswer = "Debugging";

    var status5El = document.querySelector("#status5")

    if (selectedAnswer == correctAnswer){
        status5El.textContent = "Correct!"
    } else {
        status5El.textContent = "Wrong!"
    }


    var highScores = document.querySelector("#high-scores");
    highScores.style.display = "block";
}

var startButton = document.querySelector("#start-btn");
var nextQuestion = document.querySelectorAll(".next-question")
var nextQuestion2 = document.querySelectorAll(".next-question2")
var nextQuestion3 = document.querySelectorAll(".next-question3")
var nextQuestion4 = document.querySelectorAll(".next-question4")
var nextQuestion5 = document.querySelectorAll (".next-question5")




startButton.addEventListener("click", displayQuestion)


for(let i = 0; i < nextQuestion.length; i++){
    nextQuestion[i].addEventListener("click", displayQuestion2)
}


for(let i = 0; i < nextQuestion2.length; i++){
    nextQuestion2[i].addEventListener("click", displayQuestion3)
}


for(let i = 0; i < nextQuestion3.length; i++){
    nextQuestion3[i].addEventListener("click", displayQuestion4)
}

for(let i = 0; i < nextQuestion4.length; i++){
    nextQuestion4[i].addEventListener("click", displayQuestion5)
}
