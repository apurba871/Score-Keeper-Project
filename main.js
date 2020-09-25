var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");

var p1Score = 0, p2Score = 0;

var player1_score = document.querySelector("#p1_score");
var player2_score = document.querySelector("#p2_score");
var target_score = document.querySelector("#target_score");

var target = 5;

p1Button.addEventListener("click", function() {
    console.log("Inside player 1")
    console.log(p1Score);
    console.log(target);
    if (p1Score < target && p2Score < target)
        p1Score++;
        console.log(p1Score);
        console.log(target);
    player1_score.textContent = p1Score;
    if (p1Score == target)
        player1_score.classList.add("winner");
});

p2Button.addEventListener("click", function() {
    if (p2Score < target && p1Score < target)
        p2Score++;
    player2_score.textContent = p2Score;
    if (p2Score == target)
        player2_score.classList.add("winner");
});

resetButton.addEventListener("click", resetPlayerScores);

function resetPlayerScores() {
    p1Score = 0;
    p2Score = 0;
    player1_score.textContent = 0;
    player2_score.textContent = 0;
    player1_score.classList.remove("winner");
    player2_score.classList.remove("winner");
}

numInput.addEventListener("change", function() {
    target = numInput.value;
    target_score.textContent = target;
})