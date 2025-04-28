// Once a song button is clicked the corresponding audio file needs to start playing
// first I need to fetch the audio and buttons before I can connect them

// audio tracks
const track1 = document.querySelector("#track1");
console.log(track1);

const track2 = document.querySelector("#track2");
console.log(track2);

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

// starting picture, which will be changed later
const beginPic = document.querySelector("#begin-pic");
console.log(beginPic);

// I decided to but the buttons and tracks in an array, this way I could easily match the indexes of both together to play the correct audio track
const album = [track1, track2, track3, track4];
console.log(album);

const buttons = [button1, button2, button3, button4];
console.log(buttons);

// I used the link below to link the song pictures to an external drive, in this case I used google drive
// Since I want to change which picture is showing, and not the position, I put them in an array and change through
// which element of the array is called out and thus shown
// the picture are screenshots from the music video from canvas.
//  https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website -->

const pictures = [
  "https://drive.google.com/thumbnail?id=1fffHl5ui-qoWoB89Eb2N_nh85CgOBGYU",
  "https://drive.google.com/thumbnail?id=1rXMGDoK2fELe9lhsmXuapzOwWYvrVCkj",
  "https://drive.google.com/thumbnail?id=1I5UfjzaOTROmpjbWxSLdnkYWIiyQs-i3",
  "https://drive.google.com/thumbnail?id=1r4v7w4c06idm7NAhrt3N0Fc3V-mRFXCo",
];

//change the duration text to the actual duration of the song, for this we first need to load the metadata of the audio file for each song
// it returns a number in seconds so I round it and change it to minutes and second
// https://stackoverflow.com/questions/11203773/how-can-i-get-the-html5-audios-duration-time
// https://www.w3schools.com/TAGs/av_event_loadedmetadata.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
// https://stackoverflow.com/questions/11203773/how-can-i-get-the-html5-audios-duration-time
// https://www.tutorialspoint.com/How-to-convert-JavaScript-seconds-to-minutes-and-seconds#:~:text=Divide%20the%20total%20seconds%20by,minutes%20to%20round%20down%20it.

for (let i = 0; i < album.length; i++) {
  album[i].onloadedmetadata = function () {
    let duration = album[i].duration;
    let minutes = Math.round(duration / 60);
    let seconds = Math.round(duration % 60);

    if (seconds < 10) seconds = "0" + seconds;

    document.getElementsByClassName("time")[i].innerHTML =
      minutes + "." + seconds;
  };
}

// Connecting the buttons with the tracks, to let the tracks be played.
// https://www.reddit.com/r/learnjavascript/comments/mageyv/music_player_help_how_to_pause_and_play_multiple/
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/jsref_foreach.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://www.geeksforgeeks.org/javascript-set-an-image-source-dynamically-using-js/
// click on a track and play the coresponding audio file, make sure the others are paused, since you dont want to listen to 3 songs at the same time. I also connected the
// pictures in this for loop, so if index for the button is x, index x of the pictures is shown.

// to create the loop, I used a for each loop so i could both could loop through the buttons but also the audio array.

// next to that I declare a element to store what the current track is. that way The one play/pause butten can
// play or pause the current playing song. this way it is easily clear on what control to use. instead of keep clicking on the track title
let currentTrack = null;
console.log(currentTrack);

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    album.forEach(function (track, i) {
      if (i === index) {
        //make sure the index matches up, if it does play the audio
        currentTrack = track;
        if (track.paused) {
          //if the track is paused start playing it again, change the play pause button with the same click
          track.play();
          playPauseImg.src =
            "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
        } else {
          //if it is playing and clicked the track will go on pause
          track.pause();
          playPauseImg.src =
            "https://img.icons8.com/ios-glyphs/30/play--v1.png";
        }
      } else {
        // if the button is not clicked make sure it is paused, to only have 1 audio file playing at most, reset from which point the track will start again with the next click
        track.pause();
        track.currentTime = 0;
      }
    });
    beginPic.src = pictures[index]; //change out the starting picture/track art for the corresponding piece. This used the same index as album loop

    console.log(currentTrack);
  });
});

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

function updateProgressBar() {
  let value = (currentTrack.currentTime / currentTrack.duration) * 100;
  progressBar.style.width = value + "%";
}
