// for the orgimani I chose a simple tutorial with minimal steps
//  the tutorial I chose to replicate with my application is the following video: https://www.youtube.com/watch?v=PlebdXZRqP0
// It is a tutorial for a paper heart,

// flip the paper to front and back
const paper = document.querySelector(".paper");
console.log(paper);

// had this function to make sure the 2 sides of the paper where stuck together

// paper.addEventListener("click", function () {
//   paper.classList.toggle("flip");
// });

// I start by calling all the objects I later need in my function to connect the SVG's and buttons to each other

// buttons from the individual steps
const step1 = document.querySelector("#circle1");
console.log(step1);

const step2 = document.querySelector("#circle2");
console.log(step2);

const step3 = document.querySelector("#circle3");
console.log(step3);

const step4 = document.querySelector("#circle4");
console.log(step4);

const step5 = document.querySelector("#circle5");
console.log(step5);

const step6 = document.querySelector("#circle6");
console.log(step6);

const step7 = document.querySelector("#circle7");
console.log(step7);

// put all the step buttons in an array
// const steps = [step1, step2, step3, step4, step5, step6, step7];
// console.log(steps);

const steps = [step1, step2, step3, step4, step5];
console.log(steps);

// Buttons from the footer
const prevButton = document.querySelector("#previous");
console.log(prevButton);

const nextButton = document.querySelector("#next");
console.log(nextButton);

const resetButton = document.querySelector("#reset");
console.log(resetButton);

// need an element to keep track of where in the tutorial the user is.
let currentStep = 1;
console.log(currentStep);

// const totalSteps = 7;
// console.log(totalSteps);

const totalSteps = 5;
console.log(totalSteps);

const path = document.querySelector("#fold-path");
console.log(path);

// sound for the buttons
const sound = document.querySelector("#sound");
console.log(sound);

// call up all the svg paths and put them in an array

const svgs = [
  `<svg
      class="shape"
      viewBox="0 0 350 350"
      class="svg-1"
      id="origami-svg"
      width="350"
      height="350"
    >
      <path
        d="M 0 0 L 350 0 L 350 350 L 0 350 Z"
        fill="#a62639"
        stroke="#a62639"
        stroke-width="2"
      />
    </svg>`,
  `<svg width="350" height="350" viewBox="0 0 350 350">
      <path
        d="M 55.9 271.6 
           L 343.3 136.3 
           L 343.3 51.1 
           L 252.1 51.1 
           L 196.7 0 
           L 149.1 53.3 
           L 62.6 53.3 
           L 62.6 153.3 
           L 0 213.1 
           L 58.8 271.2 
           Z"
        fill="#a62639"
        stroke="#a62639"
        stroke-width="2"
      />
      <path
        d="M 55.9 271.6 
           L 343.30 136.3 
           L 196.7 0 
           L 0 213.1 
           L 53.3 271.2
           Z"
        fill="#ff784f"
        stroke="#ff784f"
        stroke-width="2"
      />
    </svg>`,
  `<svg width="350" height="350" viewBox="0 0 350 350">
      <path
        d="M 86.89 349.99 
       L 338.36 233.57 
       L 239.07 0 
       L 93.36 0.72 
       L 100.63 134.40 
       L 0 263.73 
       L 87.61 349.27 Z"
        fill="#ff784f"
        stroke="#ff784f"
        stroke-width="2"
      />
      <path
        d="M 241.10 0.72 
       L 93.36 2.16 
       L 98.57 134.40 
       L 239.07 0.72 Z"
        fill="#a62639"
        stroke="#a62639"
        stroke-width="2"
      />
    </svg>`,
  `<svg width="350" height="350" viewBox="0 0 350 350">
      <path
        d="M 86.89 349.99 L 338.36 233.57 L 239.07 0 L 162 75 L 100.63 134.4 L 15 232 L 15 262 L 87.61 349.27 Z"
        fill="#ff784f"
        stroke="#ff784f"
        stroke-width="2"
      />
      <path
        d="M 241.1 0.72 L 129 18 L 104 44 L 100 135 L 239.07 0.72 Z"
        fill="#a62639"
        stroke="#a62639"
        stroke-width="2"
      />
    </svg>`,
  ` <svg width="350" height="350" viewBox="0 0 350 350">
      <path
        d="M 86.89 349.99 L 338.36 233.57 L 237 13 L 230 8 L 162 75 L 100.63 134.4 L 15 232 L 15 262 L 68 347 Z"
        fill="#ff784f"
        stroke="#ff784f"
        stroke-width="2"
      />
      <path
        d="M 223 4 L 129 18 L 104 44 L 100 135 L 230 8 Z"
        fill="#a62639"
        stroke="#a62639"
        stroke-width="2"
      />
    </svg>`,
  ` <svg width="350" height="350" viewBox="0 0 350 350">
      <path
        d="M 86.89 349.99 L 338.36 233.57 L 237 13 L 230 8 L 162 75 L 100.63 134.4 L 15 232 L 15 262 L 68 347 Z"
        fill="#ff784f"
        stroke="#ff784f"
        stroke-width="2"
      />
      <path
        d="M 223 4 L 129 18 L 104 44 L 100 135 L 230 8 Z"
        fill="#a62639"
        stroke="#a62639"
        stroke-width="2"
      />
    </svg>`,
];

const container = document.querySelector("#svg-container");

const stepText = document.querySelector(".step-text");

const stepInstruction = [
  `<p> <h2>Step 1:</h2><br>Start with a squared piece of paper. Put the preffered colour of your heart side down.</p>`,
  `<p> <h2>Step 2:</h2><br>Fold the bottom right corner up. There is no exact reference, try to create 4 similair sized traingles.</p>`,
  `<p> <h2>Step 3:</h2><br>Fold the shape in half, placing the triangles on top of each other, you will see the heart shape appearing.</p>`,
  `<p> <h2>Step 4:</h2><br>Round off the shape by folding the top corners of the heart down, try to make them as similair as possible. Make sure you fold both layers.</p>`,
  `<p> <h2>Step 5:</h2><br>Round off the shape more by folding the side corners of the heart down, make them as similair to each other as you can</p>`,
  `<p> <h2>Done!!</h2>Congratulations, you made a origami heart!</p>`,
];

// Put all the paths in an array (old code)
// const paths = [
//   "M 437.19999980926514 676.7750015258789 L 995.1999998092651 665.7750015258789 L 972.1999998092651 150.7750015258789 L 452.19999980926514 148.77499771118164 L 435.19999980926514 675.7750015258789 Z",
//   "M 437.19999980926514 676.7750015258789 L 995.1999998092651 665.7750015258789 L 972.1999998092651 150.7750015258789 L 452.19999980926514 148.77499771118164 L 435.19999980926514 675.7750015258789 Z",
//   "M 450.19999980926514 147.5749969482422 L 595.1999998092651 150.5749969482422 L 693.1999998092651 56.57499694824219 L 766.1999998092651 147.5749969482422 L 964.1999998092651 150.5749969482422 L 976.1999998092651 291.5749969482422 L 430.19999980926514 535.5749969482422 L 324.19999980926514 443.5749969482422 L 445.19999980926514 335.5749969482422 L 449.19999980926514 155.5749969482422 Z",
//   "M 448.19999980926514 147.375 L 595.1999998092651 143.375 L 720.1999998092651 404.375 L 426.19999980926514 540.375 L 325.19999980926514 440.375 L 443.19999980926514 334.375 L 447.19999980926514 148.375 Z",
//   "M 455.19999980926514 202.7750015258789 L 498.19999980926514 146.7750015258789 L 595.1999998092651 146.7750015258789 L 718.1999998092651 398.7750015258789 L 433.19999980926514 535.7750015258789 L 365.19999980926514 462.7750015258789 L 369.19999980926514 414.7750015258789 L 453.19999980926514 337.1750030517578 L 453.19999980926514 205.1750030517578 Z",
//   "M 452.59999990463257 207.375 L 492.59999990463257 148.375 L 556.5999999046326 152.375 L 614.5999999046326 179.375 L 719.5999999046326 398.375 L 465.59999990463257 499.375 L 405.59999990463257 505.375 L 368.59999990463257 462.375 L 371.59999990463257 404.375 L 453.59999990463257 307.375 L 448.59999990463257 203.375 Z",
// ];

// use a for loop to go through all the step buttons
// https://www.w3schools.com/tags/att_data-.asp

//I used a for loop to go through all the circle buttons, using the data marker to keep track on which step the user is and what button has been clicked (https://www.w3schools.com/tags/att_data-.asp, used this specific source to create the data tag).
// I used the same setup and logic as I used for assignment 2, and applied it to this scenario.
// The loop reads which button has been clicked, 1 is added to the number (to account for an array starting at 0, and my counting in the html at 1), this number compared to make sure it is the newest step
// If that is the case the button gets marked as complete and the next one is revealed. At the same time, the path gets replaced, and thus the animation gets updated.
// Since I am replacing the whole svg box i have to update the display so the circles are added back in
// next to that the last stap will rotate the shape so the heart is straight.
// Unfortunatly there is a little bug in my code, the previous and next button are not 100% functioning like I envisioned. Once you click through to the end of the tutorial and then use the previous button, the circes are not displayed correctly.
// If you use the button before step 4, it works like I inteded to.
// If you just use the next button to go through the tutorial, it seems to skip a step in the end.
// Using the number circles does work correctly

function updateDisplay() {
  container.innerHTML = svgs[currentStep - 1];

  steps.forEach(function (step, index) {
    container.appendChild(step);
  });
  stepText.innerHTML = stepInstruction[currentStep - 1];
}

steps.forEach(function (button) {
  button.addEventListener("click", function () {
    sound.play();
    const clickedStep = parseInt(button.dataset.phase);
    console.log(clickedStep);

    steps.forEach(function (button, index) {
      const stepNumber = index + 1;

      if (clickedStep == 5) {
        paper.style.transform = "rotateZ(67deg)";
        steps.forEach(function (step) {
          if (step) {
            step.classList.add("hidden");
          }
        });
      }

      if (stepNumber == clickedStep && clickedStep == currentStep) {
        button.classList.add("completed");
        currentStep++;
        // path.setAttribute("d", paths[currentStep]);
        // container.innerHTML = svgs[currentStep];
        if (currentStep <= totalSteps) {
          steps[currentStep - 1].classList.remove("hidden");
          // path.setAttribute("d", paths[currentStep]);
          // container.innerHTML = svgs[currentStep];
        }
        updateDisplay();
      }
    });
  });
});

// For the buttons in the footer I used a similair logic as above. the number of current step is lowered of highered (depending on the button) and the state of the previous/next button is switched,
// just like the path that gets updated. For the reset button everthing is hidden again, except for the first button in the array.

prevButton.addEventListener("click", function () {
  if (currentStep > 1) {
    currentStep--;
    steps[currentStep].classList.add("hidden");
    steps[currentStep].classList.remove("completed");

    if (currentStep > 0) {
      steps[currentStep - 1].classList.remove("completed");
      steps[currentStep - 1].classList.remove("hidden");
    }

    if (currentStep < 5) {
      paper.style.transform = "rotateZ(0deg)";

      steps[currentStep].classList.remove("completed");
      steps[currentStep].classList.add("hidden");
    }
    console.log(currentStep);
    // path.setAttribute("d", paths[currentStep]);
    // container.innerHTML = svgs[currentStep];
    updateDisplay();
  }
});

nextButton.addEventListener("click", function () {
  if (currentStep < totalSteps) {
    steps[currentStep].classList.remove("hidden");
    steps[currentStep - 1].classList.add("completed");
    currentStep++;
    console.log(currentStep);
    // path.setAttribute("d", paths[currentStep]);
    // container.innerHTML = svgs[currentStep];
    if (currentStep == 5) {
      paper.style.transform = "rotateZ(67deg)";
      steps.forEach(function (step) {
        if (step) {
          step.classList.add("hidden");
        }
      });
    }

    updateDisplay();
  }
});

resetButton.addEventListener("click", function () {
  currentStep = 1;
  paper.style.transform = "rotateZ(0deg)";

  // Reset all steps
  steps.forEach(function (step, index) {
    step.classList.remove("completed");
    if (index === 0) {
      step.classList.remove("hidden");
    } else {
      step.classList.add("hidden");
    }
  });

  updateDisplay();
});

updateDisplay();
