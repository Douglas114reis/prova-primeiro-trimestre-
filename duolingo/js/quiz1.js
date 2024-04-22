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
        question: "O que significa 'water'?",
        options: ["mar", "rio", "água", "oceano"],
        answer: 2
    },
    {
        question: "O que significa 'dog'?",
        options: ["cachorro", "gato", "cavalo", "rato"],
        answer: 0
    },
    {
        question: "O que significa 'cat'?",
        options: ["cobra", "cachorro", "cavalo", "gato"],
        answer: 3
    },
    {
        question: "O que significa 'river'?",
        options: ["ilha", "rio", "cidade", "avião"],
        answer: 1
    },
    {
        question: "O que significa 'backpack'?",
        options: ["calça", "escola", "mochila", "caneta"],
        answer: 2
    },
    {
        question: "O que significa 'singer'?",
        options: ["cantor", "ator", "escritor", "motorista"],
        answer: 0
    },
    {
        question: "como se escreve '962'?",
        options: ["nine thousand and sixty two", "nine hundred and sixty two", "nine hundreds and sixtys two", "nine hundred and sixty and two"],
        answer: 1
    },
    {
        question: "como se escreve 'jogo''?",
        options: ["console", "platform", "project", "game"],
        answer: 3
    },
    {
        question: "como se escreve 'Brasil'?",
        options: ["Brasil", "Brazyl", "Brazil", "Brasyl"],
        answer: 2
    },
    {
        question: "O que significa 'emotion'?",
        options: ["emoção", "coração", "pessoa", "sentir"],
        answer: 0
    },
];