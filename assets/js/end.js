const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const leaderboardMax= 5;

finalScore.innerText = mostRecentScore;
/**
 * Looking for a username to be entered
 */
username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
});
/**
 * Saves highscore locally with the input username
 */
saveHighScore = (e) => {
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
/**
 * Function checks Orientation of device and shows relevant portions depnding
 * on orientation and screen resolution
 */
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