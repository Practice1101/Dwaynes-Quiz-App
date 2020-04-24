'use strict';

/**
 * Example store structure
 */
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
let quizStarted = true;
let questionNumber = 3;
let score = 0;

function startScreen() {
    let html = '<section class=\'start-section\'> <h2>Do you know the fundamentals of web design?</h2> <button class=\'start - button\' type="button"> <span>Start</span> </button> </section>';
    return html;
}
function quizScreen() {
    let html = `<section class='question-section'>
                <div class='question-answer-container'> 
                <!--question container--> <div class='question-container'> 
                <h3 class='question'>Question</h3> </div>

                <!--Answers container-->
                <form class='answers-container'>
                    <input class='answer' type="radio" name='answer' value='0' required>Answer1<br />
                    <input class='answer' type="radio" name='answer' value='1' required>Answer2<br />
                    <input class='answer' type="radio" name='answer' value='2' required>Answer3<br />
                    <input class='answer' type="radio" name='answer' value='3' required>Answer4<br />
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
    if (quizStarted === false) {
        Str = startScreen();
        $('main').html(Str);
    }

    if (quizStarted === true && questionNumber > store.questions.length) {
        Str = endScreen;
        debugger;
        $('main').html(Str);
    }
    else{
        Str = quizScreen();
        $('main').html(Str);
    }
}

render();