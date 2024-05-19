document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const playButton = document.querySelector('.fa-circle-play');
  const shuffleButton = document.querySelector('.fa-shuffle');
  const repeatButton = document.querySelector('.fa-repeat');
  const backwardButton = document.querySelector('.fa-backward-step');
  const forwardButton = document.querySelector('.fa-forward-step');
  const progressBar = document.querySelector('.progress-bar');
  const currTime = document.querySelector('.curr-time');
  const totTime = document.querySelector('.tot-time');
  const volumeBar = document.querySelector('.volume');
  const audio = new Audio('assests/Daylight.mp3'); // audio file

  let isPlaying = false;

  // Play/Pause Toggle
  playButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playButton.classList.remove('fa-circle-pause');
      playButton.classList.add('fa-circle-play');
    } else {
      audio.play();
      playButton.classList.remove('fa-circle-play');
      playButton.classList.add('fa-circle-pause');
    }
    isPlaying = !isPlaying;
  });

  // Update Progress Bar and Current Time
  audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;
    currTime.textContent = formatTime(currentTime);
    totTime.textContent = formatTime(duration);
  });

  // Seek functionality
  progressBar.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (progressBar.value / 100) * duration;
  });

  // Volume Control
  volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value / 100;
  });

  // Shuffle Toggle
  shuffleButton.addEventListener('click', () => {
    // Add shuffle functionality here
  });

  // Repeat Toggle
  repeatButton.addEventListener('click', () => {
    audio.loop = !audio.loop;
    repeatButton.classList.toggle('active', audio.loop);
  });

  // Backward and Forward functionality
  backwardButton.addEventListener('click', () => {
    audio.currentTime -= 10; // Go back 10 seconds
  });

  forwardButton.addEventListener('click', () => {
    audio.currentTime += 10; // Go forward 10 seconds
  });

  // Format time helper function
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
});
