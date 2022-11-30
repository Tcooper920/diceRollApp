const actionButton = document.getElementsByClassName("primary-btn")[0];

function getRandInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dice roll...

const diceGraphic = document.getElementById("dice-graphic");

function rollDice() {
  if (diceGraphic) {
    let diceRollNumber = getRandInteger(1, 6);
    diceGraphic.setAttribute("src", "images/dice-rolling.gif");
    setTimeout(() => {
      diceGraphic.setAttribute("src", `images/dice-${diceRollNumber}.png`);
    }, "500");
  }
}

actionButton.addEventListener("click", rollDice);

// Coin toss...

const coinGraphic = document.getElementById("coin-graphic");

function flipCoin() {
  if (coinGraphic) {
    let coinFlipValue = getRandInteger(1, 2);
    coinGraphic.setAttribute("src", "images/coin-flipping.gif");
    coinGraphic.classList.add("scale-coin-size");
    setTimeout(() => {
      coinGraphic.classList.remove("scale-coin-size");
      coinGraphic.setAttribute("src", `images/coin-${coinFlipValue}.png`);
    }, "1000");
  }
}

actionButton.addEventListener("click", flipCoin);
