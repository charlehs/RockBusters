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

const rounds = [round1, round2];

let roundNo = 0;
let questionNo = 0;
let correctAnswer = rounds[roundNo][questionNo].answer;

function getQuestion() {
  if (questionNo < rounds[roundNo].length) {
    questionNo++;
    console.log(roundNo, questionNo);
  } else {
    // fix this
    roundNo++;
    questionNo = 0;
    console.log(roundNo, questionNo);
  }
}

// console.log(rounds[0][0].question);

// console.log(round[0].question);

const question = document.getElementById("question");
const hintLetters = document.getElementById("hint");

function startGame() {
  question.innerText = rounds[roundNo][questionNo].question;
  hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
}

function submittedAnswer() {
  if (document.getElementById("guess").value.toLowerCase() === correctAnswer) {
    //remove typed value
    document.getElementById("guess").value = "";
    //run function to get next question
    getQuestion();
    //reasign values to reflect next question
    correctAnswer = rounds[roundNo][questionNo].answer;
    question.innerText = rounds[roundNo][questionNo].question;
    hintLetters.innerHTML = rounds[roundNo][questionNo].letters;
  } else {
    console.log("incorrect answer");
  }
}
// console.log(currentAnswer);
function nextQuestion() {}
