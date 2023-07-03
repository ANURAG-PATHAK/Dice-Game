function rolling(){
    document.querySelector(".first img").setAttribute("src", "images/diceRolling.gif");
    document.querySelector(".second img").setAttribute("src", "images/diceRolling.gif");
}
function rollDice() {
    rolling();
    setTimeout(function(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImageSource1 = "images/dice" + randomNumber1 + ".svg";
    let randomImageSource2 = "images/dice" + randomNumber2 + ".svg";
    document.querySelector(".first img").setAttribute("src", randomImageSource1);
    document.querySelector(".second img").setAttribute("src", randomImageSource2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".header").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector(".header").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector(".header").innerHTML = "Draw!";
    }
    }, 2000);
}
let btn = document.querySelector("button");
btn.addEventListener("click", rollDice);
