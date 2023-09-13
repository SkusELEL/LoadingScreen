const music = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');

document.addEventListener('DOMContentLoaded', () => {
  music.play();
});

volumeSlider.addEventListener('input', () => {
  const volume = volumeSlider.value;
  music.volume = volume;
});

function startVideo() {
  const video = document.getElementById('video-background');
  video.play();
}