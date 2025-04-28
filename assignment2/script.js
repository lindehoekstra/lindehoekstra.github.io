// const video = document.querySelector("#custom-video-player");
// const playPauseBtn = document.querySelector("#play-pause-btn");
// const playPauseImg = document.querySelector("#play-pause-img");
// const progressBar = document.querySelector("#progress-bar-fill");
// video.removeAttribute("controls");
// // playPauseBtn.addEventListener("click", togglePlayPause);
// video.addEventListener("timeupdate", updateProgressBar);
// function togglePlayPause() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
//   } else {
//     video.pause();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
//   }
// }
// function updateProgressBar() {
//   const value = (video.currentTime / video.duration) * 100;
//   progressBar.style.width = value + "%";
// }
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

// pictures for each track
let track1pic = document.querySelector("#track1picture");
console.log(track1pic);

let track2pic = document.querySelector("#track2picture");
console.log(track2pic);

let track3pic = document.querySelector("#track3picture");
console.log(track3pic);

let track4pic = document.querySelector("#track4picture");
console.log(track4pic);

let beginPic = document.querySelector("#begin-pic");
console.log(beginPic);

// now we connect the 2 together, once the button is clicked the track starts
// https://www.reddit.com/r/learnjavascript/comments/mageyv/music_player_help_how_to_pause_and_play_multiple/
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp
const album = [track1, track2, track3, track4];
console.log(album);

const buttons = [button1, button2, button3, button4];
console.log(buttons);

let pictures = [track1pic, track2pic, track3pic, track4pic];
console.log(pictures);

// click on a track and play the coresponding audio file, make sure the others are paused
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

// put the right image in the placeholder image that it starts with
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    pictures.forEach(function (img, i) {
      if (i === index) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  });
});

// images[0].classList.add("active")

// for ( const i =0; i<buttons.length; i++){
// buttons[i].addEventListener("click", function(){
//   for (let j=0; j<pictures.length;j++){
//     pictures[j].style.display ="none"
//   }
//   if
// })

// }
