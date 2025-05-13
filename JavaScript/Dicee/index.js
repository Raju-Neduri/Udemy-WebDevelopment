// Random numbers for each dice
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Image file paths
const diceImage1 = `./images/dice${randomNumber1}.png`;
const diceImage2 = `./images/dice${randomNumber2}.png`;

// Update dice images using setAttribute
document.getElementById("left-dice").setAttribute("src", diceImage1);
document.getElementById("right-dice").setAttribute("src", diceImage2);

// Optional: Update the <h1> to show the winner
const heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}
