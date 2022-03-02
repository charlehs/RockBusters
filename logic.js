"use strict";

const round1 = [
  {
    question: "This young man prepared for his death.",
    letters: "W Y",
    answer: "will young",
  },
  {
    question: "Better than the average homeless person.",
    letters: "S",
    answer: "supertramp",
  },
  {
    question: "The little girl is hungry; what shall we do?",
    letters: "F",
    answer: "feeder",
  },
  {
    question: "Exploding pet.",
    letters: "A K",
    answer: "atomic kitten",
  },
];

const round2 = [
  {
    question: "I'll take that book to the toilet with me.",
    letters: "L R",
    answer: "lou reed",
  },
  {
    question: "Blow the candles out before you eat the cake.",
    letters: "F L",
    answer: "flaming lips",
  },
  {
    question: "How can I wash up in something shaped like that?",
    letters: "N S",
    answer: "n sync",
  },
];

const round3 = [
  {
    question: "At the moment I'm in a river full of logs.",
    letters: "J T",
    answer: "justin timberlake",
  },
  {
    question: "That lad's got bad asthma.",
    letters: "W",
    answer: "weezer",
  },
  {
    question:
      "I saw Mousetrap the other night, but the heating was knackered and it ruined the evening.",
    letters: "C",
    answer: "coldplay",
  },
];

const round4 = [
  {
    question:
      "I don't like them birds; they shouldn't be allowed in this area.",
    letters: "B",
    answer: "bangles",
  },
  {
    question:
      "He doesn't like women, yet he's got a couple of kids. That's a bit weird innit?",
    letters: "P D",
    answer: "puff daddy",
  },
  {
    question: "That bloke who does sport on telly, he's got a little kid.",
    letters: "D C",
    answer: "destiny's child",
  },
];

const round5 = [
  {
    question: "That army has got some well nice trenches.",
    letters: "D W",
    answer: "dandy warhols",
  },
  {
    question: "The top of them curtains are wrecked; all the material's worn.",
    letters: "H V",
    answer: "holly valance",
  },
  {
    question:
      "I was in Texas the other week, I fell over and landed on my knees in a puddle.",
    letters: "W H",
    answer: "whitney houston",
  },
];

const rounds = [round1, round2, round3, round4, round5];

let score = 0;
let roundNo = 0;
let questionNo = 0;
let correctAnswer = rounds[roundNo][questionNo].answer;

function getQuestion() {
  if (questionNo < rounds[roundNo].length - 1) {
    questionNo++;
    //asign question number
    document.getElementById("q-no").innerText = questionNo + 1;
  } else {
    roundNo++;
    questionNo = 0;
    document.getElementById("q-no").innerText = questionNo + 1;
    document.getElementById("r-no").innerText = roundNo + 1;
  }
  // need to add logic for end of round and for final question
}

const question = document.getElementById("question");
const hintLetters = document.getElementById("hint");

function startGame() {
  question.innerText = rounds[roundNo][questionNo].question;
  hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
  document.getElementById("q-no").innerText = questionNo + 1;
  document.getElementById("r-no").innerText = roundNo + 1;
}

function submittedAnswer() {
  if (document.getElementById("guess").value.toLowerCase() === correctAnswer) {
    //score +1
    score++;
    document.getElementById("score-display").innerText = score;
    //remove typed value
    document.getElementById("guess").value = "";
    //run function to get next question
    getQuestion();
    //reasign values to reflect next question
    correctAnswer = rounds[roundNo][questionNo].answer;
    question.innerText = rounds[roundNo][questionNo].question;
    hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
  } else {
    console.log("try again!");
    if (score > 0) {
      score--;
      document.getElementById("score-display").innerText = score;
    }

    // add score - 1 & if score hits 0 lose
    // add skip question button
  }
}

function hide() {
  var x = document.getElementById("q-container");
  x.style.display = "flex";
  document.getElementById("start-btn").style.display = "none";
}

function getRound3() {
  roundNo = 2;
  document.getElementById("r-no").innerText = roundNo + 1;

  questionNo = 0;
  correctAnswer = rounds[roundNo][questionNo].answer;

  //update question
  correctAnswer = rounds[roundNo][questionNo].answer;
  question.innerText = rounds[roundNo][questionNo].question;
  hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
}

function getRound4() {
  roundNo = 3;
  document.getElementById("r-no").innerText = roundNo + 1;

  questionNo = 0;
  correctAnswer = rounds[roundNo][questionNo].answer;

  //update question
  correctAnswer = rounds[roundNo][questionNo].answer;
  question.innerText = rounds[roundNo][questionNo].question;
  hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
}

function getRound5() {
  roundNo = 4;
  document.getElementById("r-no").innerText = roundNo + 1;

  questionNo = 0;
  correctAnswer = rounds[roundNo][questionNo].answer;

  //update question
  correctAnswer = rounds[roundNo][questionNo].answer;
  question.innerText = rounds[roundNo][questionNo].question;
  hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
}
