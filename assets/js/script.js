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
/**
 * Grabs questions from a json file
 * Then it starts the quiz
 * In event of an error it will log error to console
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
/** Question bonus is point earned when correct and 
 * The max questions is how many questions are pulled
*/
const correctBonus = 10;
const maxQuestions = 10;
// Function to start the quiz
function startQuiz() {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions]
        // Sets a delay of 1500ms to show loader and pull first question
        setTimeout(() => {
                getNewQuestion();
                quiz?.classList.remove('hidden');
                loader?.classList.add('hidden');
        }, 1500);
}
// Function pulls the next question at random
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
        // Grabs question at random and applies it to appropriate html element
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
        // Sets the inner text of the choice box's to the choices
        choices.forEach((choice) => {
                const number = choice.dataset['number'];
                choice.innerText = currentQuestion['choice' + number];
        });
        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
}
/**
 * Checks wether or not users chosen answer is correct or incorrect
 * Then it highilghts them both if incorrect or just correct if correct
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
                const correctAnswerClass = choices.find(choice => choice.dataset['number'] == currentQuestion.answer);
                // Increments the score if user was correct by the correct bonus
                if (classToApply === 'correct'){
                        incrementScore(correctBonus);
                }
                // Highlights chossen answer
                selectedChoice.parentElement.classList.add(classToApply);
                // After slight delay will highlight correct answer
                if (selectedAnswer != currentQuestion.answer) {
                        setTimeout (() => {
                                correctAnswerClass.parentElement.classList.add('correct');
                        }, 600);
                }
                // Removes highlights and loads the next question
                setTimeout(() => {
                        selectedChoice.parentElement.classList.remove(classToApply);
                        if (selectedAnswer != currentQuestion.answer) {
                                correctAnswerClass.parentElement.classList.remove('correct');
                        };
                        getNewQuestion();
                }, 2000);
        });
});
// Function increases the score when answer is correct
function incrementScore(num) {
        score += num;
        // Updates the score user sees in hud
        scoreText.innerText = score;
}
// Checks if screen width mas is 768px or lower and the orientation based on height of the device
function checkOrientation() {
        const mainContainer = document.getElementById('main');
        const quiz = document.getElementById('quiz');
        const rotateMessage = document.getElementById('rotate-message');
        if (window.matchMedia("(max-width: 768px)").matches) {
                // Only activate on mobile devices (width <= 768px)
                if (window.innerWidth > window.innerHeight) {
                        // Landscape
                        mainContainer.style.display = 'none';
                        rotateMessage.style.display = 'flex';
                } else {
                        // Portrait
                        mainContainer.style.display = 'flex';
                        rotateMessage.style.display = 'none';
                }
        } else {
                // Reset styles for desktop
                mainContainer.style.display = 'flex';
                rotateMessage.style.display = 'none';
        }
}
checkOrientation();
// Event listenrs looking for a change in screen orientation
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('resize', checkOrientation);