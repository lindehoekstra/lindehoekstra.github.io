const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);

function playVideo() {
  myVideo.play();
}

// same for pausing the video
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVideo.pause();
}

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImage = document.querySelector("#play-pause-img");
console.log(playPauseImage);

playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImage.src = "https://icons8.com/icon/pSwquXkxwLD8/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImage.src = "https://icons8.com/icon/TlSnjmNzYgKT/play--v2.png";
  }
}
