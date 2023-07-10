


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

  document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
      goToLocation('/feed')
    }
  });

  document.getElementById('fade_text').addEventListener('click',(event) => {
    goToLocation('/feed');
  })

