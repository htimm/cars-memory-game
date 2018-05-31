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

let matches = 0;


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


// The Game

function playGame() {


  // Reset move counter and timer

  moves = 0;
  moveCounter.innerHTML = `<i class="far fa-images"></i> MOVES: ` + moves;

  secs = 0;
  timer.innerHTML = `<i class="far fa-clock"></i> ` + secs + ` SEC`;

  matches = 0;


  // Shuffle cards and layout new deck

  const deckCode = shuffle(cards).map(function(card) {
    return generateCard(card);
  });

  deck.innerHTML =  deckCode.join('');

  startTimer();

  // Card flipper (includes matching, reclosing, counting up moves and the timer)

  const closedCards = document.querySelectorAll('.cardback');
  let openCards = [];

  closedCards.forEach(function(card) {
    card.addEventListener('click', function() {
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
                alert('Finished in ' + moves + ' moves and ' + secs + ' seconds.');
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
