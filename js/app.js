// Create event listener for restart button

const startButton = document.querySelector('#restart');
startButton.addEventListener('click', function() {
  alert('You have clicked on the restart button.')
})

// Create event listeners for closed cards to flip

const closedCards = document.querySelectorAll('.cardback');
closedCards.forEach(function(element) {
  element.addEventListener('click', function() {
    alert('You have clicked on a closed card.');
  })
})
