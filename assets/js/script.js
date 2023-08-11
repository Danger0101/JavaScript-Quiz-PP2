const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.querySelector("#progress-bar-full");
const loader = document.getElementById("loader");
const quiz = document.getElementById("quiz");
const howToPlayDiv = document.getElementById("how-to-play-div");
const howToPlayBtn = document.getElementById("how-to-play-btn");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
/**
 * Grabs questions from a json file
 */
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
/**
 * Function to start the quiz
 */
function startQuiz() {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions]
        getNewQuestion();
        quiz?.classList.remove('hidden');
        loader?.classList.add('hidden');
}
/**
 * Function pulls the next question at random
 */
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
/**
 * Checks wether or not users chosen answer is correct or incorrect
 * Correct answers highlight in green
 * Incorrect answers highlight in red
 */
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
/**
 * Function increases the score when answer is correct
 */
function incrementScore(num) {
        score += num;
        scoreText.innerText = score;
}

howToPlayBtn.addEventListener('click', () => {
        howToPlayDiv.classList.toggle('hidden');
});