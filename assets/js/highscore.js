const highScoresList = document.getElementById("leaderboard-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// Update highscore text based on local stored highscores
highScoresList.innerHTML = highScores
// Display's the leaderboad from local
.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
// Converts map into a single string allowing it to display multiple users with out sepperation
.join("");
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