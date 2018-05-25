// define function for positioning cards randomly in deck

// restart feature
const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  alert('You have clicked on the restart button.')
  // look for open cards and flip them to closed
  // call function for positioning cards randomly in deck
})

// card flipper
const closedCards = document.querySelectorAll('.cardback');
closedCards.forEach(function(element) {
  element.addEventListener('click', function() {
    element.setAttribute('class', 'card cardfront match');
  })
})


// Move and match

const move = function() {
  let flipCount = 0;

}
