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

function generateCard(card) {
  return `<div class="card cardback"><img src="img/cast/${card}"></div>`;
}

function startGame() {
  const deck = document.querySelector('.container');
  const deckCode = shuffle(cards).map(function(card) {
    return generateCard(card);
  });
  deck.innerHTML =  deckCode.join('');
}

startGame();


// card flipper: lets you open two cards and checks if they match

const closedCards = document.querySelectorAll('.cardback');
let openCards = [];

closedCards.forEach(function(element) {
  element.addEventListener('click', function() {

    if (element.classList.contains('cardback')) {
      openCards.push(element);
      element.setAttribute('class', 'card cardfront');

      //hier?

      if (openCards.length == 2) {

        //oder hier?
        //wenn identisch lass offen, sonst close after timeout

        setTimeout(function() {
          openCards.forEach(function(element) {
            element.setAttribute('class', 'card cardback');
          });
          openCards = [];
        }, 600);
      }
    }
  });
});
// prevent from opening 3 or more cards at a time


// restart feature
const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  alert('You have clicked on the restart button.')
  // look for open cards and flip them to closed
  // call function for positioning cards randomly in deck
  // shuffle function provided in starter code?
});


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
