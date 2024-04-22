let currentQuestion = 0;
let score = 0;


function displayQuestion() {
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById('options');
    let question = questions[currentQuestion];
    

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        let button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultElement = document.getElementById('result');
    let message;

    if (score === 10) {
        message = 'Parabéns! Você acertou todas as perguntas!';
    } else if (score >= 6) {
        message = 'Bom trabalho! Você acertou a maioria das perguntas.';
    } else if (score >= 5) {
        message = 'Você acertou metade das perguntas. Continue praticando!';
    } else {
        message = 'Você precisa estudar mais. Tente novamente!';
    }

    resultElement.textContent = `Você acertou ${score} de 10 perguntas. ${message}`;
}

window.onload = displayQuestion;
const questions = [
    {
        question: "Como se diz 'por favor, sentem-se' em inglês?",
        options: ["please, stand up", "please, sit down", "please, sit up", "please, stand down"],
        answer: 1
    },
    {
        question: "My children ______ at the garden this morning.",
        options: ["was", "are", "were", "is"],
        answer: 2
    },
    {
        question: "My dad got ___ new job.",
        options: ["a", "an", "am", "one"],
        answer: 0
    },
    {
        question: "I _____ Brazilian and I live in Curitiba.",
        options: ["is", "are", "were", "am"],
        answer: 3
    },
    {
        question: "Hey, / How / today? / Lilly. / are  / you",
        options: ["Lilly. How are hey, you today?", "How are you today. Hey, Lilly?", "Hey, Lilly. How are you today?", "How are you hey today,Lilly"],
        answer: 2
    },
    {
        question: "Qual é o simple past de 'Work'?",
        options: ["works", "worked", "worken", "work"],
        answer: 1
    },
    {
        question: "I ___________ (to be) in the US once in my life.",
        options: ["have been", "has been", "were been", "was been"],
        answer: 0
    },
    {
        question: "I _________ (buy) some food at the market today.",
        options: ["go to buy", "go to bought", "am was to buy", "am going to"],
        answer: 3
    },
    {
        question: "___ March, 30th 1986. ",
        options: ["in", "on", "at", "is"],
        answer: 1
    },
    {
        question: " I have no idea where Stephen is. ______ you know?",
        options: ["dosen't", "does", "have", "do"],
        answer: 3
    },
];