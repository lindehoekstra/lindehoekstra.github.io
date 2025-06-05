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
  }
});

nextButton.addEventListener("click", function () {
  if (currentStep < totalSteps) {
    steps[currentStep].classList.remove("hidden");
    steps[currentStep - 1].classList.add("completed");
    currentStep++;
    console.log(currentStep);
  }
});

resetButton.addEventListener("click", function () {
  currentStep = 1;
  console.log(currentStep);

  steps.forEach(function (step, index) {
    step.classList.remove("completed");
    step.classList.add("hidden");
  });

  steps[0].classList.remove("hidden");
  steps[0].classList.add("active");
});

// const fold = document.getElementById(id);
// console.log(fold);

function toggleFold(id) {
  const fold = document.getElementById(id);
  console.log(fold);
  fold.classList.toggle("folded");
}
