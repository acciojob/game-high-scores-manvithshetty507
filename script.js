// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
    const newScore = parseInt(scoreInput.value);

    if (isNaN(newScore)) {
        alert("Please enter a valid score.");
        return;
    }

    const existingScoreData = JSON.parse(localStorage.getItem('score')) || ['', 0];
    const existingName = existingScoreData[0];
    const existingScore = existingScoreData[1];

    // Check if the new score is higher than the previous highest score
    if (newScore > existingScore) {
        // Save the new score
        localStorage.setItem('score', JSON.stringify([nameInput.value, newScore]));
        scores.textContent = nameInput.value + " " + newScore;
    } else {
        scores.textContent = existingName + " " + existingScore;
    }

    // Clear input fields
    nameInput.value = '';
    scoreInput.value = '';

    showScores();
}

// Show scores in div
function showScores() {
    const scoreData = JSON.parse(localStorage.getItem('score')) || ['', 0];
    const highestScoreName = scoreData[0];
    const highestScore = scoreData[1];
    scores.textContent = highestScoreName + " " + highestScore;
}

