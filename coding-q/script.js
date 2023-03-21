var quiz = [
    {
      question: "What is JavaScript?",
      answers: ["Paris", "London", "New York", "Tokyo"],
      correctAnswer: "Paris"
    },
    {
      question: "What is CSS used for?",
      answers: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctAnswer: "Jupiter"
    },
    {
      question: " What is needed to implement bootstrap into html?",
      answers: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley", "Mount Fuji"],
      correctAnswer: "Mount Everest"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Paris", "London", "New York", "Tokyo"],
        correctAnswer: "Paris"
      },
      {
        question: "Who invented coding?",
        answers: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Jupiter"
      },
     
  ];
  


 




for (var i = 0; i < quiz.length; i++) {
    var question = quiz[i].question;
    var answers = quiz[i].answers;
    
    // Create a question element
    var questionElement = document.createElement("div");
    questionElement.innerHTML = question;
    quizElement.appendChild(questionElement);
    
    // Create an answer element for each answer
    for (var j = 0; j < answers.length; j++) {
      var answer = answers[j];
      var answerElement = document.createElement("div");
      answerElement.innerHTML = "<input type='radio' name='question" + i + "' value='" + answer + "'>" + answer;
      quizElement.appendChild(answerElement);
    }
    
    // Create a submit button for the question
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit Answer";
    submitButton.onclick = function() {
      checkAnswer(i);
    };
    quizElement.appendChild(submitButton);
  }
  