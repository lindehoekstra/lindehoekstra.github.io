const card = document.querySelector(".card");
console.log(card);

// card.addEventListener("mouseenter", flipMe);

// function flipMe() {
//   card.classList.add("flip");
// }

// card.addEventListener("mouseleave", flipMeBack);

// function flipMeBack() {
//   card.classList.remove("flip");
// }

// flip on click ipv hover
// card.addEventListener("click", toggleMe);

// function toggleMe() {
//   card.classList.toggle("flip");
// }

// zelfde manier van schrijven als hierboven
card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
