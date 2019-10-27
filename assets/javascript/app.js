$("#start").on("click", function () {
    $("#start").remove();
    for(var i=0;i<questions.length;i++){
        $("#subWrapper").append("<h2>" + questions[i].question + "</h2>");
        for(var j=0;j<questions[i].answers.length;j++){
            $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
        }
    }
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
    question: "How many birds did Chandler and Joy keep as pets durring the show?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "2"
}, {
    question: "Who was supposed to get married at the begining of the show, but didn't?",
    answers: ["Monica", "Chandler", "Rachel", "Joey"],
    correctAnswer: "Rachel"
}, {
    question: "What is Chandlers profesion at the end of the show?",
    answers: ["Chef", "Teacher", "Actor", "Advertising"],
    correctAnswer: "Advertising"
}];