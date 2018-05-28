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

// Shuffle cards and start game

function startGame() {

}

// startGame();


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
        }, 540);
      }
    }
  });
});
// prevent from opening 3 or more cards at a time

// define function for positioning cards randomly in deck

// restart feature
const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  alert('You have clicked on the restart button.')
  // look for open cards and flip them to closed
  // call function for positioning cards randomly in deck
  // shuffle function provided in starter code?
});

// Move and match

const move = function() {
  let flipCount = 0;
}
