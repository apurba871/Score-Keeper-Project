var p1Button = document.querySelector("#p1");

var p1Score = 0;

var player1_score = document.querySelector("#p1_score");
var target = document.querySelector("#target_score");

p1Button.addEventListener("click", function() {
    if (p1Score < target.textContent)
        p1Score++;
    player1_score.textContent = p1Score;
});
