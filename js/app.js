// List of card front pix

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
// Improvement: Fill up list with a random amount of pix and then let startGame() pick 8*2 of them automatically?
// Otherwise pick favorite cards


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


// Generate cards and deck

const moveCounter = document.querySelector('#move-counter');
let moves = 0;

function generateCard(card) {
  return `<div class="card cardback"><img src="img/cast/${card}"></div>`;
}

function playGame() {
  const deck = document.querySelector('.container');
  const deckCode = shuffle(cards).map(function(card) {
    return generateCard(card);
  });
  moves = 0;
  moveCounter.innerHTML = `<i class="far fa-images"></i> MOVES: `+ moves;
  deck.innerHTML =  deckCode.join('');


  // card flipper: lets you open two cards and checks if they match
  // includes move counter

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
            openCards = [];
          } else {
            setTimeout(function() {
              openCards.forEach(function(card) {
                card.setAttribute('class', 'card cardback');
              });
              openCards = [];
            }, 480);
          }
          moves += 1;
          moveCounter.innerHTML = `<i class="far fa-images"></i> MOVES: `+ moves;
        }
      }
    });
  });
  // prevent from opening 3 or more cards at a time
}

playGame();


// Restart Game

const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  playGame();
});


// if all cards have matched, display a message with the final score
