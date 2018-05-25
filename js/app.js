// restart feature

const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  alert('You have clicked on the restart button.')
})

// card flipper

const closedCards = document.querySelectorAll('.cardback');
closedCards.forEach(function(element) {
  element.addEventListener('click', function() {
    element.setAttribute('class', 'card cardfront');
  })
})
