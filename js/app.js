// List of pics

const cards = [
  'herb-curbler-760px.png', 'herb-curbler-760px.png',
  'jimbo-760px.png', 'jimbo-760px.png',
  'lightyear-blimp-760px.png', 'lightyear-blimp-760px.png',
  'lizzie-760px.png', 'lizzie-760px.png',
  'louise-nash-760px.png', 'louise-nash-760px.png',
  'mater-760px.png', 'mater-760px.png',
  'red-760px.png', 'red-760px.png',
  'tex-dinoco-760px.png', 'tex-dinoco-760px.png'
]


// Global variables

const deck = document.querySelector('.container');

const moveCounter = document.querySelector('#move-counter');
let moves = 0;

const timer = document.querySelector('#timer');
let secs = 0;

const score = document.querySelectorAll('.score');
let stars = 5;

let matches = 0;

let clicks = 0;

const congratsModal = document.querySelector('#congrats-modal');

const statsParagraph = document.querySelector('#stats');


// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Card generator

function generateCard(card) {
  return `<div class="card cardback"><img src="img/cast/${card}"></div>`;
}


// Timer functions

function startTimer() {
  timerID = setInterval(countUp, 1000);
}

function countUp() {
  secs += 1;
  timer.innerHTML = `<i class="far fa-clock"></i> ` + secs + ` SEC`;
}

function stopTimer() {
  clearInterval(timerID);
}


// Show score

function showScore() {
  const fiveStarsCode = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
  const fourStarsCode = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>`;
  const threeStarsCode = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
  const twoStarsCode = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
  const oneStarCode = `<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
  if (stars == 5) {
    scoreCode = fiveStarsCode;
  } else if (stars == 4) {
    scoreCode = fourStarsCode;
  } else if (stars == 3) {
    scoreCode = threeStarsCode;
  } else if (stars == 2) {
    scoreCode = twoStarsCode;
  } else if (stars == 1) {
    scoreCode = oneStarCode;
  }
  score.forEach(function(e) {
    e.innerHTML = scoreCode;
  });
}


// Modal handling functions

function openModal() {
  congratsModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == congratsModal) {
        congratsModal.style.display = "none";
    }
}


// The Game

function playGame() {


  // Reset move counter and timer

  moves = 0;
  moveCounter.innerHTML = `<i class="far fa-images"></i> MOVES: ` + moves;

  secs = 0;
  timer.innerHTML = `<i class="far fa-clock"></i> ` + secs + ` SEC`;

  stars = 5;
  showScore();

  matches = 0;

  clicks = 0;


  // Shuffle cards and layout new deck

  const deckCode = shuffle(cards).map(function(card) {
    return generateCard(card);
  });

  deck.innerHTML =  deckCode.join('');


  // Card flipper (includes matching, reclosing, counting up moves and the timer)

  const closedCards = document.querySelectorAll('.cardback');
  let openCards = [];

  closedCards.forEach(function(card) {
    card.addEventListener('click', function() {
      clicks +=1;
      if (clicks == 1) {
        startTimer();
      }
      if (card.classList.contains('cardback')) {
        openCards.push(card);
        card.setAttribute('class', 'card cardfront');
        if (openCards.length == 2) {
          if (openCards[0].innerHTML == openCards[1].innerHTML) {
            openCards[0].setAttribute('class', 'card cardfront match');
            openCards[1].setAttribute('class', 'card cardfront match');

            // Stop timer and open popup when all matching pairs have been found

            matches += 1;
            setTimeout(function() {
              if (matches == 8) {
                stopTimer();
                statsParagraph.innerHTML = `Finished with <strong>` + moves + ` moves</strong> in <strong>` + secs + ` seconds</strong>.`;
                openModal();
              }
            }, 200);
            openCards = [];
          } else {

            // Close card if they do not match

            setTimeout(function() {
              openCards.forEach(function(card) {
                card.setAttribute('class', 'card cardback');
              });
              openCards = [];
            }, 480);
          }
          moves += 1;
          moveCounter.innerHTML = `<i class="far fa-images"></i> MOVES: ` + moves;

          if (moves <= 11) {
            stars = 5;
          } else if (moves <= 15) {
            stars = 4;
          } else if (moves <= 19) {
            stars = 3;
          } else if (moves <= 23) {
            stars = 2;
          } else {
            stars = 1;
          }
          showScore();
        }
      }
    });
  });
}


playGame();


// Restart game

const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  stopTimer();
  playGame();
});

const playAgain = document.querySelector('.button');
playAgain.addEventListener('click', function() {
  congratsModal.style.display = "none";
  playGame();
})
