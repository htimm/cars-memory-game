// Create event listeners for closed cards

const closedCards = document.querySelectorAll('.cardback');
closedCards.forEach(function(element) {
  element.addEventListener('click', function() {
    alert('You have clicked on a closed card.');
  })
})
