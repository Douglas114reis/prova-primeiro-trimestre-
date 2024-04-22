let currentQuestion = 0;
let score = 0;


function displayQuestion() {
    let questionElement = document.getElementById('question');
    let imageElement = document.getElementById('image'); // Seleciona o elemento da imagem
    let optionsElement = document.getElementById('options');
    let question = questions[currentQuestion];
    
    questionElement.textContent = question.question;
    imageElement.innerHTML = ''; // Limpa o conteúdo anterior da div da imagem

    // Adiciona a imagem apenas se houver um src definido
    if (question.imgSrc) {
        let img = document.createElement('img');
        img.src = question.imgSrc;
        imageElement.appendChild(img);
    }

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
        question: "Sobre o que essa propaganda é?",
        imgSrc: "img/1.png",
        options: ["um modelo de carro", "seguro de carro", "um mecanico", "uma corrida"],
        answer: 1
    },
    {
        question: "Sobre o que essa propaganda é?",
        imgSrc: "img/2.png",
        options: ["um pet shop que está colocando filhotes para adoção", "um pet shop que está anunciando uma rinha de galo", "um pet shop que está anunciando um serviço de banhos", "um pet shop que vende comida e acessorios"],
        answer: 3
    },
    {
        question: "O que está sendo anunciado nesse cartaz?",
        imgSrc: "img/3.png",
        options: ["uma exibição de arte", "um campionato de arte", "um musem de arte", "um leilão de arte"],
        answer: 0
    },
    {
        question: "O que esse jornal é sobre?",
        imgSrc: "img/4.png",
        options: ["o final da primeira guerra mundial, com a derrota dos britanicos em 1918", "o final da guerra civil americana, com a vitoria do lincoln em 1865", "o final da primeira guerra mundial, com a derrota da alemanha em 1918", "o final da segunda guerra mundial, com a derrota da alemanha em 1945"],
        answer: 2
    },
    {
        question: "O que está semdo anuncido?",
        imgSrc: "img/5.png",
        options: ["um carro de brinquedo", "vários brinquedos em um jornal", "a promoção de vários brinquedos", "uma venda de garagem de brinquedos antigos"],
        answer: 1
    },
    {
        question: "Descreva a bandeira dos EUA",
        imgSrc: "img/6.png",
        options: ["50 blue stars with 13 strips that varies with red snd white", "50 stars with 13 strips that varies with white and red", "50 stars with 13 vertical lines that varies with red snd white", "50 stars with 13 strips that varies with red and white"],
        answer: 3
    },
    {
        question: "Como são as subdivisons de primeiro nível do Brasil?",
        imgSrc: "img/7.png",
        options: ["26 states and 1 federal district", "26 provences and 1 federal distric", "5 regions", "5 regions, diveded into 26 states and 1 federal district"],
        answer: 0
    },
    {
        question: "O que essa imagem explica",
        imgSrc: "img/8.png",
        options: ["como usar uma máquina de lavar", "como não perder meias na máquina de lavar", "como obter fungos com uma máquina de lavar", "como obter bacterias com uma máquina de lavar"],
        answer: 2
    },
    {
        question: "ssa propaganda é sobre",
        imgSrc: "img/9.png",
        options: ["um mecanico", "um lava carros", "uma pintadora de carros", "uma venda de carros zeros"],
        answer: 1
    },
    {
        question: "O que significa 'emotion'?",
        imgSrc: "img/10.png",
        options: ["uma caixa de JBL", "um sorteio de uma caixa de JBL", "um bingo para um caixa de JBL", "uma caixa de JBL com 30% de desconto"],
        answer: 3
    },
];