const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let img
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  img.innerHTML=document.getElementById('img')
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  img.innerHTML=document.getElementById('img')
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
 
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '2', correct: false },
      { text: '5', correct: false },

    ],

  
  },
  {
    question: 'What is 2 * 6?',
    answers: [
        { text: '12', correct: true },
        { text: '16', correct: false },
        { text: '2', correct: false },
        { text: '18', correct: false },
  
    ]
  },
  {
    question: 'What is 22 /4 ?',
    answers: [
        { text: '5.5', correct: true },
        { text: '4', correct: false },
        { text: '6', correct: false },
        { text: '8', correct: false },
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '18', correct: false },
      { text: '12', correct: false },
    ] 
  },
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '2', correct: false },
      { text: '5', correct: false },

    ],

  
  },
  {
    question: 'What is 3 * 6?',
    answers: [
        { text: '12', correct: false },
        { text: '16', correct: false },
        { text: '2', correct: false },
        { text: '18', correct: true },
  
    ]
  },
  {
    question: 'What is 20 /4 ?',
    answers: [
        { text: '5', correct: true },
        { text: '4', correct: false },
        { text: '6', correct: false },
        { text: '8', correct: false },
    ]
  },
  {
    question: 'What is 20 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '40', correct: true },
      { text: '18', correct: false },
      { text: '12', correct: false },
    ] 
  },
  {
    question: 'What is 256 + 234?',
    answers: [
      { text: '490', correct: true },
      { text: '456', correct: false },
      { text: '480', correct: false },
      { text: '500', correct: false },

    ],

  
  },
  {
    question: 'What is 3 * 12?',
    answers: [
        { text: '36', correct: true },
        { text: '22', correct: false },
        { text: '8', correct: false },
        { text: '20', correct: false },
  
    ]
  },
  {
    question:'Continue the lyrics ---Take another little piece--',
    answers: [
        { text: 'of my head now baby!', correct: true },
        { text: 'of my belly now, baby!', correct: false },
        { text:'of my heart now, baby!', correct: false },
        
    ]
  },
  {
    question: 'Continue the lyrics ---Welcome to the--' ,
   
    answers: [
      { text: 'israel', correct: false },
      { text: 'city', correct: true },
      { text: 'jungle', correct: false },
  
    ] 
  },
  {
    question:'Continue the lyrics ---Back in-- ',
   
    answers: [
      { text: 'Black', correct: true },
      { text: 'white', correct: false },
      { text: 'red', correct: false },
     

    ],

  
  },
  {
    question:'Who is the top scorer in the Champions League all times',
    answers: [
        { text: 'Cristiano Ronaldo', correct: true },
        { text: 'messi', correct: false },
        { text: 'Raul', correct: false },
    
  
    ]
  },
  {
    question:'Who is the top scorer of La Liga all times',
    
    answers: [
        { text: 'messi', correct: true },
        { text: 'Cristiano Ronaldo', correct: false },
        { text: 'Raul', correct: false },
       
    ]
  },
  {
    question: 'Who has the most wins in the Champions League all times',
    answers: [
      { text: 'barcelona', correct: false },
      { text: 'Real Madrid', correct: true },
      { text: 'liverpool', correct: false },
      
    ] 
  },
  {
    question: 'Who has the most wins in the La liga all times',
    answers: [
      { text: 'Real Madrid', correct: true },
      { text: 'barcelona', correct: false },
      { text: 'Sevillya', correct: false },

    ],

  
  },
  {
    question: 'Who has the most wins in the premier league all times',
    answers: [
        { text: 'manchester united', correct: true },
        { text: 'Arsenal', correct: false },
        { text: 'Liverpol', correct: false },
      
  
    ]
  },
  {
    question:'Who is the top scorer of premier league all times',   
    answers: [
        { text: 'Alan Shearer', correct: true },
        { text: 'Andrew Cole', correct: false },
        { text: 'Wayne Roone', correct: false },
      
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '18', correct: false },
      { text: '12', correct: false },
    ] 
  },
  {
    question:'all time top scorer soccer',
    answers: [
      { text: 'Josef Bican', correct: true },
      { text: 'Pelé', correct: false },
      { text: 'Romário', correct: false },
     

    ],

  
  },
  {
    question:'Who has the most Assists of premier league all times ',
    answers: [
        { text: 'Ryan Giggs', correct: true },
        { text: 'Wayne Rooney', correct: false },
        { text: 'Cesc Fàbregas', correct: false },
     
  
    ]
  },
  {
    question:'Who has the most Assists of la liga all times',
 
    answers: [
        { text: 'Lionel Messi', correct: true },
        { text: 'Cristiano Ronaldo', correct: false },
        { text: 'Karim Benzema', correct: false },
     
    ]
  },
  {
    question: 'Who has the most wins in the World Cup',
    answers: [
      { text: 'France', correct: false },
      { text: 'Brazil', correct: true },
      { text: 'Germany', correct: false },
   
    ] 
  },
  {
    question:'How to say thank you in French',
    answers: [
      { text: 'Merci', correct: true },
      { text: 'Thanks', correct: false },
      { text: 'Gracias', correct: false },

    ],

  
  },
  {
    question: 'How to say thank you in Spain',
    answers: [
        { text: 'Gracias', correct: true },
        { text: 'Thanks', correct: false },
        { text: 'Merci', correct: false },
     
  
    ]
  },
  {
    question:'How do you say what time it is now in English',
    answers: [
        { text: 'whats the time', correct: true },
        { text: 'quelle heure est-il', correct: false },
        { text: 'que hora es', correct: false },
       

    ]
  },
  {
    question:'How do you say what time it is now in Spain',
    answers: [
      { text: 'quelle heure est-il', correct: false },
      { text: 'que hora es', correct: true },
      { text: 'whats the time', correct: false },
  
    ] 
  },
  {
    question: 'How do you say what time it is now in French',
    answers: [
      { text: 'quelle heure est-il', correct: true },
      { text: 'whats the time', correct: false },
      { text: 'que hora es', correct: false },
    ],

  },
  {
    question:'How to say dog in French',
    answers: [
        { text: 'Chien', correct: true },
        { text: 'Perro', correct: false },
        { text: 'Собака', correct: false },

    ]
  },
  {
    question:'How to say dog in Spain',
    answers: [
        { text: 'Perro', correct: true },
        { text: 'Chien', correct: false },
        { text: 'Собака', correct: false },
    
    ]
  },
  {
    question:'How to say hello in French',
    answers: [
      { text: 'Shalom', correct: false },
      { text: 'Bonjour', correct: true },
      { text: 'Hola', correct: false },
   
    ] 
  },
  {
    question:'How to say hello in Spain'
    ,
    answers: [
      { text: 'Bonjour', correct: true },
      { text: 'Shalom', correct: false },
      { text: 'Hola', correct: false },
    ],

  
  },
  {
    question:'How to say with an appetite in French',
    
    answers: [
        { text: 'bonapitte', correct: true },
        { text: 'With an appetite', correct: false },
        { text: 'Avec un appétit', correct: false },
  
    ]
  },
  {
    question: 'How many eyes does a bee have?',
    answers: [
        { text: '5', correct: true },
        { text: '4', correct: false },
        { text: '6', correct: false },
        { text: '8', correct: false },
    ]
  },
  {
    question: 'How many hearts does an octopus have?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
      { text: '2', correct: false },
    ] 
  },
  {
    question: 'How long is the gestation period of an African elephant?',
    answers: [
      { text: '22 months', correct: true },
      { text: '9 months', correct: false },
      { text: '29 months', correct: false },
      { text: '16 months', correct: false },

    ],

  
  },
  {
    question: 'What is 2 * 6?',
    answers: [
        { text: '12', correct: true },
        { text: '16', correct: false },
        { text: '2', correct: false },
        { text: '18', correct: false },
  
    ]
  },
  {
    question: 'In what year were the first Air Jordan sneakers released?',
    answers: [
        { text: '1984', correct: true },
        { text: '1988', correct: false },
        { text: '1994', correct: false },
        { text: '1989', correct: false },
    ]
  },
  {
    question: 'In which European city would you find Orly airport?',
    answers: [
      { text: ' Paris', correct: false },
      { text: 'Madrid', correct: true },
      { text: 'Berllin', correct: false },
      { text: 'Amsertedam', correct: false },
    ] 
  },
]
