const time_remaining = document.getElementById("time_remaining")
const start_container = document.getElementById("start_container")
const start_btn = document.getElementById("start_btn")
const quiz_container = document.getElementById("quiz_container")
const question = document.getElementById("question")
const choices = document.getElementById("choices")
const score_container = document.getElementById("score_container")
const user_initials = document.getElementById("user_initials")
var currentQuestion = 0;
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
let time = 60
let timer_id;
let question_index = 0;
var score = 0;
let choices_index = ["0", "1", "2", "3"];

console.log(questions)

start_btn.addEventListener("click", function (e) {
    start_container.classList.add("hide")
    quiz_container.classList.remove("hide")

    startTimer()
    displayQuestion()
})

// this function starts the timer for quiz & clearInterval is needed to stop the timer
function startTimer() {
    
    clearInterval(timer_id)
    time = 60;
    timer_id = setInterval(function () {
        time--;
        time_remaining.textContent = "Hurry!:" + time;
        
        if (time <= 0) {
            clearInterval(timer_id)
            // showScore();
        }
    }, 1000 * 1)
}

function displayQuestion() {

    if(question_index >= questions.length) {
        quiz_container.classList.add("hide");
        clearInterval(timer_id);
        return
    }

    question.textContent = questions[question_index].question

    choices.innerHTML = ""
    for (let i = 0; i < questions[question_index].choicesArr.length; i++) {
        const button = document.createElement("button")
        button.textContent = questions[question_index].choicesArr[i]
        button.addEventListener("click", clickedChoice)

        choices.appendChild(button)
        
    }
}

function clickedChoice(event) {
    //console.log(this.textContent === questions[question_index].correct)
    console.log(event.target.textContent)

    if(event.target.textContent === questions[question_index].correct) {
        score += 10;
    }else {
        score -= 5;
    }
    console.log(score);

    question_index++
    startTimer()
    displayQuestion()
}