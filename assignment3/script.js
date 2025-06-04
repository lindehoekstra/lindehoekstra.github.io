// for the orgimani I chose a simple tutorial with minimal steps
//  the tutorial I chose to replicate with my application is the following video: https://www.youtube.com/watch?v=PlebdXZRqP0
// It is a tutorial for a paper heart

// flip the paper to front and back
const paper = document.querySelector(".paper");
console.log(paper);

paper.addEventListener("click", function () {
  paper.classList.toggle("flip");
});

//
