function checkScore() {
  const score1 = document.querySelector("#score1");
  console.log(score1);
  let score = score1.value;
  console.log("You scored", score, "points out of 100");

  if (score < 30) {
    console.log("Sorry, you scored unsatisfactory:(");
  } else if (score >= 30 && score < 50) {
    console.log("You scored satisfactory!");
  } else if (score >= 50 && score < 60) {
    console.log("You scored good!!!");
  } else if (score >= 60 && score < 70) {
    console.log("Nice work, you scored very good!!!");
  } else if (score >= 70 && score < 80) {
    console.log("Congrats, excellent score!!!");
  } else if (score > 80) {
    console.log("Could not be better, full marks!!!");
  }
  reportBackGrade();
}

function reportBackGrade() {
  let report = document.querySelector("#report");
  report.innerHTML = "";
  const score1 = document.querySelector("#score1");
  console.log(score1);
  let score = score1.value;
  if (score < 30) {
    report.innerHTML = `Sorry, you scored unsatisfactory:(`;
  } else if (score >= 30 && score < 50) {
    report.innerHTML = `You scored satisfactory!`;
  } else if (score >= 50 && score < 60) {
    report.innerHTML = `You scored good!!!`;
  } else if (score >= 60 && score < 70) {
    report.innerHTML = `Nice work, you scored very good!!!`;
  } else if (score >= 70 && score < 80) {
    report.innerHTML = `Congrats, excellent score!!!`;
  } else if (score > 80) {
    report.innerHTML = `Could not be better, full marks!!!`;
  }
}
