const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress__filled');
const progressBarWrapper = player.querySelector('.progress');
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

function updateSpeedAndVolume () {
  video[this.name] = this.value;
}

function updateProgressBar() {
  var videoPercentProgress = this.currentTime*100/this.duration;
  progressBar.style.width = parseFloat(videoPercentProgress) + '%';
}

function udpateCurrentTime(e) {
  var time = (e.offsetX*100/600)*video.duration/100;
  video.currentTime = time;
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgressBar);

skippers.forEach( skipper => skipper.addEventListener('click', skip))
sliders.forEach(slider => slider.addEventListener('click', updateSpeedAndVolume))
sliders.forEach(slider => slider.addEventListener('move', updateSpeedAndVolume))

let mouseDown = false;

progressBarWrapper.addEventListener('click', udpateCurrentTime)
progressBarWrapper.addEventListener('mousemove', (e) => mouseDown && udpateCurrentTime(e))
progressBarWrapper.addEventListener('mousedown', () => mouseDown = true);
progressBarWrapper.addEventListener('mouseup', () => mouseDown = false);
