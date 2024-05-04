let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer;
let running = false;

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(updateTimer, 10);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.querySelector('.timer').innerText = '00:00:00';
}

function updateTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  const formattedTime =
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds) +
    ':' +
    (milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds);
  document.querySelector('.timer').innerText = formattedTime;
}

document.querySelector('.btn-start').addEventListener('click', startTimer);
document.querySelector('.btn-pause').addEventListener('click', pauseTimer);
document.querySelector('.btn-reset').addEventListener('click', resetTimer);
