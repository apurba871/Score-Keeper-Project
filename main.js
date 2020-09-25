var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");

var p1Score = 0, p2Score = 0;

var player1_score = document.querySelector("#p1_score");
var player2_score = document.querySelector("#p2_score");

var target = document.querySelector("#target_score");

p1Button.addEventListener("click", function() {
    if (p1Score < target.textContent && p2Score < target.textContent)
        p1Score++;
    player1_score.textContent = p1Score;
});

p2Button.addEventListener("click", function() {
    if (p2Score < target.textContent && p1Score < target.textContent)
        p2Score++;
    player2_score.textContent = p2Score;
});