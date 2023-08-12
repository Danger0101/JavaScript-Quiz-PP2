const highScoresList = document.getElementById("leaderboard-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
/**
 * Display's the leaderboad from local
 */
.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
/**
 * converts map into a single string allowing it to display multiple users with out sepperation
 */
.join("");
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