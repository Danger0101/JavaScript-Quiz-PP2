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
const maxQuestions = 10;

function startQuiz() {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions]
        getNewQuestion();
        quiz?.classList.remove('hidden');
        loader?.classList.add('hidden');
}

function getNewQuestion() {
        if (availableQuestions.length === 0 || questionCounter > maxQuestions - 1) {
                localStorage.setItem("mostRecentScore", score);
                // go to end.html
                return window.location.assign('end.html');
        }
        questionCounter++;
        progressText.innerText = `Question: ${questionCounter} / ${maxQuestions}`;
        // Update and fill the progress bar
        progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach((choice) => {
                const number = choice.dataset['number'];
                choice.innerText = currentQuestion['choice' + number];
        });
        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
}

choices.forEach(choice => {
        choice.addEventListener('click', e => {
                if (!acceptingAnswers) return;

                acceptingAnswers = false;
                const selectedChoice = e.target;
                const selectedAnswer = selectedChoice.dataset['number'];

                const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

                if (classToApply === 'correct'){
                        incrementScore(correctBonus);
                }
                selectedChoice.parentElement.classList.add(classToApply);

                setTimeout(() => {
                        selectedChoice.parentElement.classList.remove(classToApply);
                        getNewQuestion();
                }, 1000);
        });
});

function incrementScore(num) {
        score += num;
        scoreText.innerText = score;
}