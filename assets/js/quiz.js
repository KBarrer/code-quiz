var questionOne = ["1. strings", "2.booleans", "3. alerts", "4. Numbers"];

var main = document.getElementById("main");


function startQuiz() {
    document.getElementById("title").remove();
    document.getElementById("text").remove();
    document.getElementById("startQuizBtn").remove();
    startTimer();
    firstQuestion();
    console.log("IT'S WORKING!");
}

function startTimer() {
    var oneMinute = 60,
    display = document.querySelector('#time');
    beginTime(oneMinute, display);
}

function beginTime(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

function firstQuestion() {
    var main = document.getElementById("main");

    console.log(main);

    var question = document.createElement("h2");
    question.innerHTML = "Commonly used data types Do Not Include:";
    main.appendChild(question);

    var options = document.createElement("div");
    main.appendChild(options);
    for (i = 0; i < 4; i++) {
        var optionsText = document.createElement("button");
        optionsText.innerHTML = questionOne[i];
        optionsText.classList.add("btn")
        options.appendChild(optionsText);
    };
    
    
    console.log(questionOne);

};



document.addEventListener("click", startQuiz);

document.getElementById("#startQuizBtn");
