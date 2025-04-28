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

const beginPic = document.querySelector("#begin-pic");
console.log(beginPic);

// now we connect the 2 together, once the button is clicked the track starts
// https://www.reddit.com/r/learnjavascript/comments/mageyv/music_player_help_how_to_pause_and_play_multiple/
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp
const album = [track1, track2, track3, track4];
console.log(album);

const buttons = [button1, button2, button3, button4];
console.log(buttons);

const pictures = [
  "https://drive.google.com/thumbnail?id=1fffHl5ui-qoWoB89Eb2N_nh85CgOBGYU",
  "https://drive.google.com/thumbnail?id=1rXMGDoK2fELe9lhsmXuapzOwWYvrVCkj",
  "https://drive.google.com/thumbnail?id=1I5UfjzaOTROmpjbWxSLdnkYWIiyQs-i3",
  "https://drive.google.com/thumbnail?id=1r4v7w4c06idm7NAhrt3N0Fc3V-mRFXCo",
];

let currentTrack = null;

// click on a track and play the coresponding audio file, make sure the others are paused
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    album.forEach(function (track, i) {
      if (i === index) {
        currentTrack = track;
        console.log(currentTrack);

        if (track.paused) {
          track.play();
          playPauseImg.src =
            "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
        } else {
          track.pause();
          playPauseImg.src =
            "https://img.icons8.com/ios-glyphs/30/play--v1.png";
        }
      } else {
        track.pause();
        track.currentTime = 0;
      }
    });
    beginPic.src = pictures[index];
  });
});

// https://www.geeksforgeeks.org/javascript-set-an-image-source-dynamically-using-js/

// buttons.forEach(function (button, index) {
//   button.addEventListener("click", function () {
//     beginPic.src = pictures[index];
//   });
// });

// play pause button controls
const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

playPauseBtn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (currentTrack.paused) {
    // track.play();
    currentTrack.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    // track.pause();
    currentTrack.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function togglePlayPause() {
  if (!currentTrack) {
    // Als er geen track is geselecteerd, doe niks
    console.log("no track playing");
    return;
  }
  if (currentTrack.paused) {
    currentTrack.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    currentTrack.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// function updateProgressBar() {
//   const value = (video.currentTime / video.duration) * 100;
//   progressBar.style.width = value + "%";
// }
