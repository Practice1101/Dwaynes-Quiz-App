'use strict';
const store = {
  questions: [
    {
      question: 'What does HTML stand for?',
      answers: [
        'Home Tool Markup Language',
        'Hyper Text Markup Language',
        'Hyperlinks and Text Markup Language',
        'Homogenus Text Make-Up Language'
      ],
      correctAnswer: 'Hyper Text Markup Language'
    },
    {
      question: 'Who is making the Web standards?',
      answers: [
        'The World Wide Web Consortium',
        'Google',
        'Microsoft',
        'Mozilla'
      ],
      correctAnswer: 'The World Wide Web Consortium'
    },
    {
      question: 'What is the correct HTML element for the largest heading?',
      answers: [
        'h1',
        'h6',
        'head',
        'heading'
      ],
      correctAnswer: 'h1'
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      answers: [
        'break',
        'lb',
        'br',
        'hr'
      ],
      correctAnswer: 'br'
    },
    {
      question: 'What is the correct CSS for adding a background color?',
      answers: [
        'yellow',
        'bg=”yellow”',
        'background-color:yellow;',
        'bg style = color:yellow'
      ],
      correctAnswer: 'background-color:yellow;'
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        'scripting',
        'javascript',
        'script',
        'js'
      ],
      correctAnswer: 'script'
    },
    {
      question: 'What tag uses the Lang attribute?',
      answers: [
        'content',
        'div',
        'body',
        'html'
      ],
      correctAnswer: 'html'
    },
    {
      question: 'Where is the correct place to insert a JavaScript?',
      answers: [
        'The body section',
        'Both the head and the body',
        'The head section',
        'The CSS page'
      ],
      correctAnswer: 'Both the head and the body'
    },
    {
      question: 'What is the correct syntax for referring to an external script called “xxx.js”?',
      answers: [
        'script href=”xxx.js”',
        'script src=”xxx.js”',
        'script name=”xxx.js”',
        'script alt=”xxx.js”'
      ],
      correctAnswer: 'script src=”xxx.js”'
    },
    {
      question: 'How do you write “Hello World” in an alert box?',
      answers: [
        'alert(“Hello World”);',
        'msg(“Hello World”);',
        'alertBox(“Hello World”);',
        'msgBox(“Hello World”);'
      ],
      correctAnswer: 'alert(“Hello World”);'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  veracity: false
};
/********** TEMPLATE GENERATION FUNCTIONS **********/
function startPage() {
  return `
        <div id = 'startPageContainer'>
          <h2 id = 'displayH2'>Test your<br>Web Development knowledge</h2>
          <button class='startQuiz'>Start Quiz</button>`;
}
      
function questionsPage() {
  let answer1 = store.questions[store.questionNumber].answers[0];
  let answer2 = store.questions[store.questionNumber].answers[1];
  let answer3 = store.questions[store.questionNumber].answers[2];
  let answer4 = store.questions[store.questionNumber].answers[3];
  let currentQuestion = store.questions[store.questionNumber].question;
  return `<form id = 'questionsForm'>
            <h2 id = 'currentQuestion'>${currentQuestion}</h2>
            <div id = 'radios'>
              <input type="radio" class='answer' name='answer' value='${answer1}' required>${answer1}<br />
              <input type="radio" class='answer' name='answer' value='${answer2}' required>${answer2}<br />
              <input type="radio" class='answer' name='answer' value='${answer3}' required>${answer3}<br />
              <input type="radio" class='answer' name='answer' value='${answer4}' required>${answer4}<br />
            </div>   
          </form>
          <div class = 'bottomBar'>
            <input type='submit' class='submitAnswer'>
            <div class = 'score'>Score:${store.score}/10</div>
            <div class = 'question'>Question:${store.questionNumber+1}/10</div>
          </div>`;
}
function submissionPage() {
  let thisVeracity = ''
  if (store.veracity === true) {
    thisVeracity = 'Correct!';
  } else if (store.veracity === false) {
    thisVeracity = 'Incorrect'
  }
  let str = `<div class="boxes">
                <h2>${thisVeracity}</h2>
              </div>`;
  if (thisVeracity === 'Correct!') {
    str += `<div class="boxes">
              <button class='nextQuestion'>Next Question</button>
            </div>`;
  } else if (thisVeracity === 'Incorrect') {
    str += `<h3 class = 'correctAnswer'>The correct answer is: <br>${store.questions[store.questionNumber].correctAnswer}</h3>
            <div class="boxes">
              <button class='nextQuestion'>Next Question</button>
            </div>`;
  }
  return str;
};
function finalPage() {
  return `
      <h2>End of Quiz</h2>
      <div>
        <p class = 'finalMessage'>You answered ${store.score} of ${store.questions.length} correctly.</p>
        <button class='startOver'>Try Again?</button>
      </div>`;
}
/********** RENDER FUNCTION(S) **********/
function renderStartPage() {
  const titlePage = startPage();
  $('.quiz').html(titlePage);
}
function renderQuestionsPage() {
  const question = questionsPage();
  $('.quiz').html(question);
}
function renderSubmissionPage() {
  const submission = submissionPage();
  $('.quiz').html(submission);
}
function renderFinalPage() {
  const end = finalPage();
  $('.quiz').html(end);
}
/********** EVENT HANDLER FUNCTIONS **********/
function clickStartButton() {
  $('.quiz').on('click', '.startQuiz', event => {
    event.preventDefault();
    store.questionNumber = 0;
    renderQuestionsPage();
  })
}
function clickSubmitButton() {
  $('.quiz').on('click', '.submitAnswer', event => {
    event.preventDefault();
    let rightAnswer = store.questions[store.questionNumber].correctAnswer;
    let selectedOption = $('input[name=answer]:checked', '#questionsForm').val();
    if (selectedOption === undefined) {
      renderQuestionsPage();
      alert('Please select one of the options');
    } else if (selectedOption === rightAnswer) {
      store.veracity = true;
      store.score++;
      renderSubmissionPage();
    } else if (selectedOption !== rightAnswer && selectedOption !== undefined) {
      store.veracity = false;
      renderSubmissionPage();
    }
  })
}
function clickNextQuestion() {
  $('.quiz').on('click', '.nextQuestion', event => {
    event.preventDefault();
    store.questionNumber++;
    if (store.questionNumber >= store.questions.length) {
      renderFinalPage();
    }
    else {
      renderQuestionsPage();
    }
  })
}
function clickstartOver() {
  $('.quiz').on('click', '.startOver', event => {
    event.preventDefault();
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    store.veracity = false;
    renderStartPage();
  })
}
//App handle function
const handleQuizApp = function () {
  renderStartPage();
  clickStartButton();
  clickSubmitButton();
  clickNextQuestion();
  clickstartOver();
}
$(handleQuizApp);
