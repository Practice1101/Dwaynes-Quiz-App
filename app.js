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
    quizStarted: false,
    questionNumber: 0,
    score: 0
};

function render() {
    $('main').html(<div id="container">
        <p class="question">Question</p>
        <div id="myDiv"></div>
        <ul id="answerList">
            <li>Answer1</li>
            <li>Answer2</li>
            <li>Answer3</li>
            <li>Answer4</li>
        </ul>
        <button id="startButton">Start Quiz</button>
    </div>)
}

$(document).ready(function () {
    render();
});


