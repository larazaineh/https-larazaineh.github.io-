var playing = false;
var score;
var livesLeft;
var step;
var action;
var fruitsList = ['apple', 'banana', 'grapes', 'lemon', 'mango', 'orange', 'pineapple', 'watermelon'];

$(function() {
    
    $("#button").click(function() {
       if (playing == true) {
           location.reload();
       } else {
           playing = true;
           $("#gameOver").hide();
           score = 0;
           $("#setScore").html(score);
           
           $("#livesleft").show();
           livesLeft = 3;
           setHearts();
           $("#button").html("Reset Game");
           startGame();
       }
    });
    
    $("#fruit").mouseenter(function() {
        score++;
        $("#setScore").html(score);
        $("#knifeslash")[0].play();
        clearInterval(action);
        
        $("#fruit").hide("explode", 500);
        
        setTimeout(startGame, 500);
    });

    function setHearts() {
        $("#livesleft").empty();
        for (i = 0; i < livesLeft; i++) {
                   $("#livesleft").append('<img src="images/heart.png" class="lives">');
               }
    }

    function startGame() {
        $("#fruit").show();
        chooseFruit();
        var rand = Math.round(550 * Math.random());
        $("#fruit").css({'left': rand, 'top': -50});

        step = Math.round(5 * Math.random()) + 1;
        action = setInterval(function() {
            $("#fruit").css('top', $("#fruit").position().top + step);

            if ($("#fruit").position().top > $("#fruitscontainer").height()) {
                if (livesLeft > 1) {
                    livesLeft--;
                    setHearts();
                    $("#fruit").show();
                    chooseFruit();
                    var rand = Math.round(550 * Math.random());
                    $("#fruit").css({'left': rand, 'top': -50});

                    step = Math.round(5 * Math.random()) + 1;
                } else {
                    playing = false;
                    $("#gameOver").show();
                    $("#gameOver").html("<p>Game Over!</p><p>Your score is " + score + ".</p>")
                    $("#livesleft").hide();
                    $("#button").html("Start Game");
                    endGame();
                }
            }

        }, 10);
    } 

    function chooseFruit() {
        var rand = Math.floor(fruitsList.length * Math.random());
        $("#fruit").attr('src', 'images/' + fruitsList[rand] + '.png');
    }

    function endGame() {
        clearInterval(action);
        $("#fruit").hide();
    }
    
});