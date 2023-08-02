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