$(document).ready(function () {
    //pick random number between 15 & 99
    var randNumb = Math.floor(Math.random() * 85 + 15);

    //displays random number in HTML
    $("#randNumb").text(randNumb);

    //assigns random number between 2 & 9 to each marble
    var blue = Math.floor(Math.random() * 8 + 2);
    var green = Math.floor(Math.random() * 8 + 2);
    var purple = Math.floor(Math.random() * 8 + 2);
    var red = Math.floor(Math.random() * 8 + 2);

    //itialize wins and losses
    var wins = 0;
    var losses = 0;
    var points = 0;

    //Display wins and losses in HTML
    $("wins").text(wins);
    $("losses").text(losses);





    //blue marble program
    $("#blue").on("click", function () {
        points = points + blue;
        $("#points").text(points);
        if (points == randNumb) {
            win();
        }
        else if (points > randNumb) {
            lose();
        }
    })

    //green marble program
    $("#green").on("click", function () {
        points = points + green;
        $("#points").text(points);
        if (points == randNumb) {
            win();
        }
        else if (points > randNumb) {
            lose();
        }
    })

    //purple marble program
    $("#purple").on("click", function () {
        points = points + purple;
        $("#points").text(points);
        if (points == randNumb) {
            win();
        }
        else if (points > randNumb) {
            lose();
        }
    })

    //red marble program
    $("#red").on("click", function () {
        points = points + red;
        $("#points").text(points);
        if (points == randNumb) {
            win();
        }
        else if (points > randNumb) {
            lose();
        }
    })

    //adds wins on win
    function win() {
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        reset()
    }

    //adds loss on loss
    function lose() {
        alert("BUST!");
        losses++;
        $("#losses").text(losses);
        reset();
    }


    //game reset
    function reset() {
        randNumb = Math.floor(Math.random() * 85 + 15);
        console.log(randNumb);
        $('#randNumb').text(randNumb);
        blue = Math.floor(Math.random() * 8 + 2);
        green = Math.floor(Math.random() * 8 + 2);
        purple = Math.floor(Math.random() * 8 + 2);
        red = Math.floor(Math.random() * 8 + 2);
        points = 0;
        $('#points').text(points);
    }
})