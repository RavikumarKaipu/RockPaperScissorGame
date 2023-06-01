let gameResult = document.getElementById("gameResult");
let Rock = document.getElementById("button1");
let Paper = document.getElementById("button2");
let scissor = document.getElementById("button3");
let limit1 = 0;
let limit2 = 3;
let num = Math.round((Math.random()) * (limit2 - limit1) + limit1);
console.log(num);
let clickedRock = 1;
let clickedPaper = 2;
let clickedScissor = 3;

function rock() {

    if ( num === 0) {
        gameResult.textContent = "Oops! tryAgain";
        gameResult.style.color = "red";
        gameResult.style.fontWeight = "bold";
        gameResult.style.backgroundColor = "#1e217c";
    } else if(num===clickedRock) {
        gameResult.textContent="Game Tied!"
        gameResult.style.backgroundColor = "yellow";
        gameResult.style.color = "red";
        gameResult.style.fontWeight = "bold";

    }
    
    else if (num === clickedPaper) {
        gameResult.textContent = "Oh! You Loss";
        gameResult.style.backgroundColor = "red";
        gameResult.style.color = "yellow";
        gameResult.style.fontWeight = "bold";
    } else if (num === 3) {
        gameResult.textContent = "Congartulatons! You Won";
        gameResult.style.backgroundColor = "green";
        gameResult.style.color = "violet";
        gameResult.style.fontWeight = "bold";
    }
}

function paper() {
    if (num === 0) {
        gameResult.textContent = "Oops! tryAgain";
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.style.color = "red";
        gameResult.style.fontWeight = "bold";
    }else if(num===clickedPaper) {
        gameResult.textContent="Game Tied!"
        gameResult.style.backgroundColor = "yellow";
        gameResult.style.color = "red";
        gameResult.style.fontWeight = "bold";

    }
    else if (num === clickedRock) {
        gameResult.textContent = "Congartulatons! You Won";
        gameResult.style.backgroundColor = "green";
        gameResult.style.fontWeight = "bold";
        gameResult.style.color = "violet";
    } else {
        gameResult.textContent = "Oh! You Loss";
        gameResult.style.color = "yellow";
        gameResult.style.backgroundColor = "red";
        gameResult.style.fontWeight = "bold";
    }


}

function Scissor() {
    if (num === clickedPaper) {
        gameResult.textContent = "Congartulatons! You Won";
        gameResult.style.backgroundColor = "green";
        gameResult.style.color = "violet";
    } else if (num === clickedRock) {
        gameResult.textContent = "Oh! You Loss";
        gameResult.style.color = "yellow";
        gameResult.style.backgroundColor = "red";
        gameResult.style.fontWeight = "bold";
    } else if (num === 0) {
        gameResult.textContent = "Oops! tryAgain";
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.style.color = "red";
        gameResult.style.fontWeight = "bold";
    }else if(num===clickedScissor) {
        gameResult.textContent="Game Tied!"
        gameResult.style.backgroundColor = "yellow";
        gameResult.style.color = "red";
        gameResult.style.fontWeight = "bold";

    }
}