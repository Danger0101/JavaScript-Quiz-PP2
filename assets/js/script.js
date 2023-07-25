const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.querySelector("#progress-bar-full");
const loader = document.getElementById("loader");
const quiz = document.getElementById("quiz");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];
fetch('assets/json/questions.json').then(res => {
        return res.json();
}).then(loadedQuestions => {
        questions = loadedQuestions;
        startQuiz();
}).catch(err => {
        console.log(err);
});

const correctBonus = 10;
const maxQuestions = 15;

function startQuiz() {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions]
        getNewQuestion();
        quiz?.classList.remove('hidden');
        loader?.classList.add('hidden');
}

function getNewQuestion() {
}

choices.forEach(choice => {
});

function incrementScore(num) {

}