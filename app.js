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
            '<h1>',
            '<h6>',
            '<head>',
            '<heading>'
          ],
          correctAnswer: '<h1>'
        },
        {
          question: 'What is the correct HTML element for inserting a line break?',
          answers: [
            '<break>',
            '<lb>',
            '<br>',
            '<hr>'
          ],
          correctAnswer: '<br>'
        },
        {
          question: 'What is the correct HTML for adding a background color?',
          answers: [
            '<background>yellow</background>',
            '<body bg =”yellow”>',
            '<body style=”background-color:yello;”>',
            '<bg style = color: yellow>'
          ],
          correctAnswer: '<body style=”background-color:yello;”>'
        },
        {
          question: 'Inside which HTML element do we put the JavaScript?',
          answers: [
            '<scripting>',
            '<javascript>',
            '<script>',
            '<js>'
          ],
          correctAnswer: '<script>'
        },
        {
          question: 'How do you change this content?',
          answers: [
            'document.getElementById(“demo”).innerHTML = “Hello World!”;',
            'document.getElement(“p”).innerHTML = “Hello World!”;',
            'document.getElementByName(“p”).innerHTML = “Hello World!”;',
            '#demo.innerHTML = “Hello World!”;'
          ],
          correctAnswer: 'document.getElementById(“demo”).innerHTML = “Hello World!”;'
        },
        {
          question: 'Where is the correct place to insert a JavaScript?',
          answers: [
            'The <body> section',
            'Both the <head> section and the <body>',
            'The <head> section',
            'The CSS page'
          ],
          correctAnswer: 'Both the <head> section and the <body>'
        },
        {
          question: 'What is the correct syntax for referring to an external script called “xxx.js”?',
          answers: [
            '<script href=”xxx.js”>',
            '<script src=”xxx.js”>',
            '<script name=”xxx.js”>',
            '<script alt=”xxx.js”>'
          ],
          correctAnswer: '<script href=”xxx.js”>'
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
    score: 0
  };

let currentQuestionNumber = 0;
let totalNumberOfQuestion = store.questions.length;
let totalScore = 0

function start() {
  $('.start-button').click(function () {
      $('.start-section').hide();
      $('.question-section').show();
      $('.final-section').hide();
      currentQuestionNumber = 0;
  })
};
function tryAgain() {
  $('.reset-button').click(function () {
      location.reload();
  })
}
function checkAnswer() {
  let userAnswer = $('input[class="answer"]:checked').val();
  console.log($('input[class="answer"]:checked'));
  let correctAnswer = store.questions[currentQuestionNumber].questionAnswer;
  console.log(correctAnswer, userAnswer);
  if (userAnswer == correctAnswer) {
      totalScore++;
      console.log(totalScore);
  }else {
      console.log(totalScore)
  };
};
function questionDisplay() {
  //    $('.question').empty();
  $('.question').text(store.questions[currentQuestionNumber].question);
  questionStatus();
  scoreStatus();
}
function answersDisplay() {
  //delete old .answers-container
  $('.answers-container').empty();
  $('.answers-container').append(`<input class='answer' type="radio" name='answer' value='${store.questions[currentQuestionNumber].answers[currentQuestionNumber]}' required>${store.questions[currentQuestionNumber].answers[0]}<br />
                                  <input class='answer' type="radio" name='answer' value='${store.questions[currentQuestionNumber].answers[currentQuestionNumber]}' required>${store.questions[currentQuestionNumber].answers[1]}<br />
                                  <input class='answer' type="radio" name='answer' value='${store.questions[currentQuestionNumber].answers[currentQuestionNumber]}' required>${store.questions[currentQuestionNumber].answers[2]}<br />
                                  <input class='answer' type="radio" name='answer' value='${store.questions[currentQuestionNumber].answers[currentQuestionNumber]}' required>${store.questions[currentQuestionNumber].answers[3]}<br />`
                                  );
}
function questionStatus() {
  $('.question-circle').empty();
    $('.question-circle').append(
      `<p class= 'question-status'>Question ${currentQuestionNumber + 1} out of 10</p>`
    )
};
function scoreStatus() {
  $('.score-circle').empty();
  $('.score-circle').append(
      `<p>Score ${totalScore} out of 10</p>`
  );
  console.log('scoreStatus ran');
  console.log(totalScore);
};
function submit() {
  $('.submit-button').click(function () {
      if ((currentQuestionNumber + 1) <= totalNumberOfQuestion) {
          checkAnswer();
          $('.final-score-container').empty();
          $('.final-score-container').append(
              `<p> Final Score: ${totalScore} out of 10</p>`
          );
          $('.start-section').hide();
          $('.question-section').hide();
          $('.final-section').show();
          scoreStatus();
      } else {
          checkAnswer();
          currentQuestionNumber++;
          questionDisplay();
          answersDisplay();
          console.log(totalScore);
      }
  });
}
function functionsHandler() {
  start();
  tryAgain();
  checkAnswer();
  containerLighter();
  questionDisplay();
  answersDisplay();
  questionStatus();
  scoreStatus();
};
$(function () {
  $('.question-section').hide();
  $('.final-section').hide();
  start();

  //On Question Section
  submit();

  questionDisplay();
  answersDisplay();
  //    questionStatus();
  //    scoreStatus();
  tryAgain();
})