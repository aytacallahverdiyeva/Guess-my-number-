"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("🔢 No number! ");
  } else if (guess === number) {
        displayNumber(number);
        displayMessage("🥳 Correct Number!");

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

  } 
//   when guess is wrong
  else if (guess !== number) {
    if (score > 1) {
        displayMessage(guess > number ? "📈 Too high! " : "📉 Too low! ")
        score--;
        document.querySelector(".score").textContent = score;
      } else {
          displayMessage('🥲 You lost the game...');
          document.querySelector('.score').textContent = 0;
      }
  }
});
//   else if (guess > number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high! ";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//         document.querySelector('.message').textContent = '🥲 You lost the game...'
//         document.querySelector('.score').textContent = 0;
//     }
//   } 
  
//   else if (guess < number) {
//     if (score > 1) {
//         document.querySelector(".message").textContent = "📉 Too low! ";
//         score--;
//         document.querySelector(".score").textContent = score;
//       } else {
//           document.querySelector('.message').textContent = '🥲 You lost the game...'
//           document.querySelector('.score').textContent = 0;
//       }
//   }


// Again button functionality
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing... ");
    displayNumber('?');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
})
