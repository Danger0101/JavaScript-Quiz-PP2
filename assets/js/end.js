const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// Saves highscores locally
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// Updates the text to show you quiz score
finalScore.innerText = mostRecentScore;
// Looking for a username to be entered
username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
});
// Saves highscore locally with the input username
const saveHighScore = (e) => {
        e.preventDefault();
        const score = {
                score: mostRecentScore,
                name: username.value,
        };
        
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);
        
        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign('index.html');
};
// Checks if screen width mas is 768px or lower and the orientation based on height of the device
function checkOrientation() {
        const mainContainer = document.getElementById('main');
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