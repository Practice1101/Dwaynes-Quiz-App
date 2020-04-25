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
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    
};

function startScreen() {
    let html = `<h2>Do you know the fundamentals of web design?</h2> 
                <form class = 'startButton'>
                    <button type="submit">Start</button>
                </form>`;

    return html;
}
function quizScreen() {
    let pulledQuestion = store.questions[store.questionNumber].question;
    let answer1 = store.questions[store.questionNumber].answers[0];
    let answer2 = store.questions[store.questionNumber].answers[1];
    let answer3 = store.questions[store.questionNumber].answers[2];
    let answer4 = store.questions[store.questionNumber].answers[3];
    let html = `<section class='question-section'>
                    <div class='question-answer-container'> 
                <!--question container--> <div class='question-container'> 
                    <h3 class='question'>${pulledQuestion}</h3> </div>

                <!--Answers container-->
                        <form class ='pickQuestion'>
                            <button type="submit" id = '${answer1}'>${answer1}</button>
                            <button type="submit" id = '${answer1}'>${answer1}</button>
                            <button type="submit" id = '${answer1}'>${answer1}</button>
                            <button type="submit" id = '${answer1}'>${answer1}</button>
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
    console.log(store.quizStarted);
    if(store.quizStarted === false) {
        Str = startScreen();
        $('main').html(Str);
    }
    if(store.quizStarted === true && store.questionNumber > store.questions.length) {
        Str = endScreen;
        $('main').html(Str);
    }
    if(store.quizStarted === true && store.questionNumber < store.questions.length){
        Str = quizScreen();
        $('main').html(Str);
    }
}

    render();


$('.startButton').submit(function(event) {
    store.quizStarted = true;
    console.log(store.questions[store.questionNumber].answers[0]);
    render();
    return false;
});

$('.pickQuestion').on("submit", function(e) {
    console.log(questions)
    e.preventDefault();
    store.quizStarted = true;
    store.questionNumber++;
    render();
    return false;
});