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