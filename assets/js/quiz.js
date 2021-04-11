

function startQuiz() {
    var main = document.getElementById("main")
    main.remove();
    startTimer();
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

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}



document.addEventListener("click", startQuiz);

document.getElementById("#startQuizBtn");
