/*eslint-env browser*/

var isPlaying = false;
var score;
var timer, timeRemaining;
var correctAnswer, wrongAnswer;
var x, y, ansPosition;

document.getElementById("button").onclick = function(){
    if (isPlaying == true) {
        isPlaying = false;
        location.reload();
    }else {
        isPlaying = true;
        score = 0;
        document.getElementById("setScore").innerHTML = score;
        show("stopwatch");
        hide("gameOver");
        timeRemaining = 60;
        document.getElementById("time").innerHTML = timeRemaining;
        document.getElementById("button").innerHTML = "Reset Game";
        
        startCountdown();
        generateQA();
    }
}

function startCountdown() {
    timer = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("time").innerHTML = timeRemaining;
        
        if(timeRemaining == 0) {
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + "!</p>";
            hide("stopwatch");
            hide("correct");
            hide("wrong");
            isPlaying = false;
            document.getElementById("button").innerHTML = "Start Game";
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function generateQA() {
    x = Math.round(Math.random() * 9) + 1;
    y = Math.round(Math.random() * 9) + 1;
    correctAnswer = x * y;
    document.getElementById("questionbox").innerHTML = x + "x" + y;
    
    ansPosition = Math.round(Math.random() * 3) + 1;
    document.getElementById("choice" + ansPosition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];
    
    for (var i = 1; i <= 4; i++) {
        if (i != ansPosition) {
            do {
                wrongAnswer = makeWrongAnswer();
            }while (answers.indexOf(wrongAnswer) > -1)
                
            document.getElementById("choice" + i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
}

function makeWrongAnswer() {
    return (Math.round(Math.random() * 9) + 1) * (Math.round(Math.random() * 9) + 1);
}

for (var i = 1; i <= 4; i++) {
    document.getElementById("choice" + i).onclick = function() {
   if (isPlaying == true) {
       if (this.innerHTML == correctAnswer) {
        score++;
        document.getElementById("setScore").innerHTML = score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
            }, 500);
        }
       else {
            hide("correct");
            show("wrong");
            setTimeout(function(){
            hide("wrong");
            }, 500);
        }
       generateQA();
   }
}
}



