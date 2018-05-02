const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress_filled');
const video = player.querySelector('.video-file');
const toggle = player.querySelector('.toggle');
const skippers = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updateButton() {
  let icon = this.paused ? '▶' : 'II';
  toggle.innerText = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skippers.forEach( skipper => skipper.addEventListener('click', skip))
