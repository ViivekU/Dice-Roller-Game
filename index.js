function rollDice () {
    let randomNum = Math.floor(Math.random() * 6) + 1
    return randomNum
}

let player1 = rollDice()
let player2 = rollDice()
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + player1 + ".png")
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + player2 + ".png")
if (player1 > player2) {
    document.getElementsByClassName("winnerTitle")[0].innerHTML = "🚩 Player 1 wins!"
} else if (player1 < player2) {
    document.getElementsByClassName("winnerTitle")[0].innerHTML = "Player 2 wins! 🚩"
} else {
    document.getElementsByClassName("winnerTitle")[0].innerHTML = "Draw"
}
