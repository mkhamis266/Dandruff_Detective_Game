const allSituations = [
  {
    img: "images/treat.jpg",
    solution: "treat",
  },
  {
    img: "images/protect.jpg",
    solution: "protect",
  },
  {
    img: "images/relieve.jpg",
    solution: "relieve",
  },
];
let currentSituation;
const tryAgainModal = new bootstrap.Modal("#tryAgainModal", {
  keyboard: false,
  backdrop: "static",
});

function getRandomSituation() {
  return allSituations[Math.floor(Math.random() * allSituations.length)];
}

function renderSituation() {
  console.log(currentSituation);
  $(".situation-img-container img").attr("src", currentSituation.img);
}

function startGame() {
  currentSituation = getRandomSituation();
  renderSituation();
  $("#startPage").hide();
  $("#gamePage").show();
}

function solveSituation(userChoice) {
  if (userChoice == currentSituation.solution) {
    showFinalPage();
  } else {
    showTryAgainModal();
  }
}

function showFinalPage() {
  $("#gamePage").hide();
  $("#finalPage").show();
}

function showTryAgainModal() {
  tryAgainModal.show();
}

function tryAgain() {
  tryAgainModal.hide();
  currentSituation = getRandomSituation();
  renderSituation();
}

function restartGame() {
  $("#finalPage").hide();
  $("#startPage").show();
}