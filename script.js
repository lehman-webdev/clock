var interval = null;

function tick() {
  // get the current time
  var time = (new Date()).toLocaleString();

  // get a reference to the output HTML element
  var element = document.getElementById('clock');

  // set the text of the HTML element
  element.innerText = time;
}

function toggle() {
  // get a reference to the toggle button
  var button = document.getElementById('toggle');
  var clock = document.getElementById('clock');

  if (interval) {
    // clock is ticking -- pause it
    window.clearInterval(interval);
    interval = null;

    button.innerText = 'Unpause';
    clock.classList = 'paused';
  } else {
    // clock is not ticking -- start it (invoke tick() every 1000ms)
    interval = window.setInterval(tick, 1000);

    button.innerText = 'Pause';
    clock.classList = '';
  }
}

// start the clock after the page loads
document.addEventListener('DOMContentLoaded', toggle);
