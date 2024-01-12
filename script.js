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

    const existingScore = parseInt(localStorage.getItem('score')) || 0;

    // Check if the new score is higher than the previous highest score
    if (newScore > existingScore) {
        // Save the new score
        localStorage.setItem('score', newScore);
        scores.textContent = newScore;
    } else {
        scores.textContent = existingScore;
    }

    // Clear input fields
    nameInput.value = '';
    scoreInput.value = '';

    showScores();
}

// Show scores in div
function showScores() {
    // You may want to implement logic here to show all scores instead of just the highest one
    const highestScore = parseInt(localStorage.getItem('score')) || 0;
    scores.textContent = highestScore;
}
