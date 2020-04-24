'use strict';
const store = {
    // 5 or more questions are required
    questions: [
        {
            question: 'What color is broccoli?',
            answers: [
                'red',
                'orange',
                'pink',
                'green'
            ],
            correctAnswer: 'green'
        },
        {
            question: 'What is the current year?',
            answers: [
                '1970',
                '2015',
                '2019',
                '2005'
            ],
            correctAnswer: '2019'
        }
    ],
};
let quizStarted = false;
let questionNumber = 0;
let score = 0;

function startScreen() {
    let html = `<h2>Do you know the fundamentals of web design?</h2> 
                <form class = 'startButton'>
                    <button type="submit">Start</button>
                </form>`;

    return html;
}
function quizScreen() {
    let pulledQuestion = store.questions[questionNumber].question;
    let answer1 = store.questions[questionNumber].answers[0];
    let answer2 = store.questions[questionNumber].answers[1];
    let answer3 = store.questions[questionNumber].answers[2];
    let answer4 = store.questions[questionNumber].answers[3];
    let html = `<section class='question-section'>
                <div class='question-answer-container'> 
                <!--question container--> <div class='question-container'> 
                <h3 class='question'>${pulledQuestion}</h3> </div>

                <!--Answers container-->
                <form class='answers-container' >
                    <input class='answer' type="radio" name='answer' value='0' required>${answer1}<br />
                    <input class='answer' type="radio" name='answer' value='1' required>${answer2}<br />
                    <input class='answer' type="radio" name='answer' value='2' required>${answer3}<br />
                    <input class='answer' type="radio" name='answer' value='3' required>${answer4}<br />
                    <input type="submit" value = "Next Question">
                    </form>
                </div>
                </section>`;
    return html;
}
function endScreen() {
    let html = `<div class='final-score-container'> 
                <p>Final Score: ten out of ten</p>
                </div>`
    return html;
}
function render() {
    let Str = '';
    if(quizStarted === false) {
        Str = startScreen();
        $('main').html(Str);
    }
    if(quizStarted === true && questionNumber > store.questions.length) {
        Str = endScreen;
        $('main').html(Str);
    }
    if(quizStarted === true && questionNumber < store.questions.length){
        Str = quizScreen();
        $('main').html(Str);
    }
}



render();

$('.startButton').submit(function(event) {
    quizStarted = true;
    console.log(store.questions[questionNumber].answers[0]);
    render();
});