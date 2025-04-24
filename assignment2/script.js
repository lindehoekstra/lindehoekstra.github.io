const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

// Once a song button is clicked the corresponding audio file needs to start playing
// first I need to fetch the audio and buttons before I can connect them

// audio tracks
const track1 = document.querySelector("#track1");
console.log(track1);

const track2 = document.querySelector("#track2");
console.log(track1);

const track3 = document.querySelector("#track3");
console.log(track3);

const track4 = document.querySelector("#track4");
console.log(track4);

// buttons
const button1 = document.querySelector(".button1");
console.log(button1);

const button2 = document.querySelector(".button2");
console.log(button2);

const button3 = document.querySelector(".button3");
console.log(button3);

const button4 = document.querySelector(".button4");
console.log(button4);

// now we connect the 2 together, once the button is clicked the track starts
// button1.addEventListener(
//   "click",
//   playTrack1,
//   pauseTrack2,
//   pauseTrack3,
//   pauseTrack4
// );

// function playTrack1() {
//   track1.play();
// }

// // other tracks
// button2.addEventListener(
//   "click",
//   playTrack2,
//   pauseTrack1,
//   pauseTrack3,
//   pauseTrack4
// );

// function playTrack2() {
//   track2.play();
// }

// button3.addEventListener(
//   "click",
//   playTrack3,
//   pauseTrack1,
//   pauseTrack2,
//   pauseTrack4
// );

// function playTrack3() {
//   track3.play();
// }

// button4.addEventListener(
//   "click",
//   playTrack4,
//   pauseTrack1,
//   pauseTrack2,
//   pauseTrack3
// );

// function playTrack4() {
//   track4.play();
// }

// pause the other tracks
// we dont want the other tracks to keep playing once we click on a certain track,
// so we have to add a pause for the other tracks

// function pauseTrack1() {
//   track1.pause();
// }

// function pauseTrack2() {
//   track2.pause();
// }

// function pauseTrack3() {
//   track3.pause();
// }

// function pauseTrack4() {
//   track4.pause();
// }

// https://www.reddit.com/r/learnjavascript/comments/mageyv/music_player_help_how_to_pause_and_play_multiple/
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp
const album = [track1, track2, track3, track4];
console.log(album);

const buttons = [button1, button2, button3, button4];
console.log(buttons);

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    album.forEach(function (track, i) {
      if (i === index) {
        if (track.paused) {
          track.play();
        } else {
          track.pause();
        }
      } else {
        track.pause();
        track.currentTime = 0;
      }
    });
  });
});
