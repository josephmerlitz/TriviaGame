$("#start").on("click", function () {
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
})

var questions = [{
    question: "How many friends are in the tv show Friends?",
    answers: ["4", "5", "6", "7"],
    correctAnswer: "6"
}, {
    question: "How many of the friends are married at the end of the show?",
    answers: ["2", "3", "4", "5"],
    correctAnswer: "3"
}, {
    question: "How many birds did Chandler and Joey keep as pets durring the show?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "2"
}, {
    question: "Who was supposed to get married at the begining of the show, but didn't?",
    answers: ["Monica", "Chandler", "Rachel", "Joey"],
    correctAnswer: "Rachel"
}, {
    question: "What is Chandlers profession at the end of the show?",
    answers: ["Chef", "Teacher", "Actor", "Advertising"],
    correctAnswer: "Advertising"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>30</span> Seconds</h2>")
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subWrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subWrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $('#subWrapper').append('<br><br><button id="end">Done</button>')
    },
    done: function () {
        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function () {
        clearInterval(timer);
        $('#subWrapper h2').remove();

        $('#subWrapper').html("<h2>You have finished!!</h2>");
        $('#subWrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subWrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subWrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}