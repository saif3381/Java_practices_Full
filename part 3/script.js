let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "to high";
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";

      document.querySelector(".number").textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "to low";
    score--;

    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "start guessing";

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector(".body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "15rem";
});

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForcast = function (arr) {
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {
//     str = str + `...${arr[i]} c in ${i + 1} days ...`;
//   }
//   console.log(str);
// };
// printForcast(data1);
// printForcast(data2);

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector('.guess').value= 23;
