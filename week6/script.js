// let a = 20;
// let b = 10;

// function add(val1, val2) {
//   let total = val1 + val2;
//   console.log(total);
//   return total;
// }

// // let a = 20;
// // let b = 10;
// // let c = a + b;
// // console.log(c);
// let c = add(a, b);
// console.log(c);
// a = 40;
// b = 14;
// c = add(a, b);
// c = add(34, 67);

const header = document.querySelector("header");
header.innerHTML += "<h1> this is OART </h1>";
console.log(header.innerHTML);

const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.style.color = "crimson";

const myFirstPara = document.querySelector("p");
console.log(myFirstPara);

const myFirstSub = document.querySelector("h2");
console.log(myFirstSub);

const mySecSub = document.querySelector("#first-subheading");
console.log(mySecSub);

const allPara = document.querySelectorAll(".blue-color");
console.log(allPara);
for (let i = 0; i < allPara.length; i++) {
  console.log(allPara[i].textContent);
  allPara[i].style.border = "1px solid green";
  allPara[i].style.backgroundColor = "beige";
}

const myButton = document.querySelector("#my-button");
console.log(myButton);

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}

myButton.addEventListener("click", handleClick);

function handleClick() {
  console.log("Hey did you just click me?");
  // topHeading.textContent = "this is a new heading"
  myCat.classList.toggle("round");
}
