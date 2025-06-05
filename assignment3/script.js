// for the orgimani I chose a simple tutorial with minimal steps
//  the tutorial I chose to replicate with my application is the following video: https://www.youtube.com/watch?v=PlebdXZRqP0
// It is a tutorial for a paper heart

// flip the paper to front and back
const paper = document.querySelector(".paper");
console.log(paper);

// had this function to make sure the 2 sides of the paper where stuck together

// paper.addEventListener("click", function () {
//   paper.classList.toggle("flip");
// });

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
const steps = [step1, step2, step3, step4, step5, step6, step7];
console.log(steps);

// Buttons from the footer
const prevButton = document.querySelector("#previous");
console.log(prevButton);

const nextButton = document.querySelector("#next");
console.log(nextButton);

const resetButton = document.querySelector("#reset");
console.log(resetButton);

let currentStep = 1;
console.log(currentStep);

const totalSteps = 7;
console.log(totalSteps);

const path = document.querySelector("#fold-path");
console.log(path);

// met de paths
const paths = [
  "M 437.19999980926514 676.7750015258789 L 995.1999998092651 665.7750015258789 L 972.1999998092651 150.7750015258789 L 452.19999980926514 148.77499771118164 L 435.19999980926514 675.7750015258789 Z",
  "M 437.19999980926514 676.7750015258789 L 995.1999998092651 665.7750015258789 L 972.1999998092651 150.7750015258789 L 452.19999980926514 148.77499771118164 L 435.19999980926514 675.7750015258789 Z",
  "M 450.19999980926514 147.5749969482422 L 595.1999998092651 150.5749969482422 L 693.1999998092651 56.57499694824219 L 766.1999998092651 147.5749969482422 L 964.1999998092651 150.5749969482422 L 976.1999998092651 291.5749969482422 L 430.19999980926514 535.5749969482422 L 324.19999980926514 443.5749969482422 L 445.19999980926514 335.5749969482422 L 449.19999980926514 155.5749969482422 Z",
  "M 448.19999980926514 147.375 L 595.1999998092651 143.375 L 720.1999998092651 404.375 L 426.19999980926514 540.375 L 325.19999980926514 440.375 L 443.19999980926514 334.375 L 447.19999980926514 148.375 Z",
  "M 455.19999980926514 202.7750015258789 L 498.19999980926514 146.7750015258789 L 595.1999998092651 146.7750015258789 L 718.1999998092651 398.7750015258789 L 433.19999980926514 535.7750015258789 L 365.19999980926514 462.7750015258789 L 369.19999980926514 414.7750015258789 L 453.19999980926514 337.1750030517578 L 453.19999980926514 205.1750030517578 Z",
  "M 452.59999990463257 207.375 L 492.59999990463257 148.375 L 556.5999999046326 152.375 L 614.5999999046326 179.375 L 719.5999999046326 398.375 L 465.59999990463257 499.375 L 405.59999990463257 505.375 L 368.59999990463257 462.375 L 371.59999990463257 404.375 L 453.59999990463257 307.375 L 448.59999990463257 203.375 Z",
];

// use a for loop to go through all the step buttons
// https://www.w3schools.com/tags/att_data-.asp
steps.forEach(function (button) {
  button.addEventListener("click", function () {
    const clickedStep = parseInt(button.dataset.phase);
    console.log(clickedStep);

    steps.forEach(function (button, index) {
      const stepNumber = index + 1;

      if (stepNumber == clickedStep && clickedStep == currentStep) {
        button.classList.add("completed");
        currentStep++;
        if (currentStep <= totalSteps) {
          steps[currentStep - 1].classList.remove("hidden");
        }
      }
    });
  });
});

prevButton.addEventListener("click", function () {
  if (currentStep > 1) {
    currentStep--;
    steps[currentStep].classList.add("hidden");
    steps[currentStep].classList.remove("completed");
    if (currentStep > 0) {
      steps[currentStep - 1].classList.remove("completed");
    }
    console.log(currentStep);
    path.setAttribute("d", paths[currentStep]);
  }
});

nextButton.addEventListener("click", function () {
  if (currentStep < totalSteps) {
    steps[currentStep].classList.remove("hidden");
    steps[currentStep - 1].classList.add("completed");
    currentStep++;
    console.log(currentStep);
    path.setAttribute("d", paths[currentStep]);
  }
});

resetButton.addEventListener("click", function () {
  currentStep = 1;
  console.log(currentStep);

  steps.forEach(function (step, index) {
    step.classList.remove("completed");
    step.classList.add("hidden");
    path.setAttribute("d", paths[currentStep]);
  });

  steps[0].classList.remove("hidden");
  steps[0].classList.add("active");
  path.setAttribute("d", paths[0]);
});

// const fold = document.getElementById(id);
// console.log(fold);

function toggleFold(id) {
  const fold = document.getElementById(id);
  console.log(fold);
  fold.classList.toggle("folded");
}
