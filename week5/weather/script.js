function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp);
  let temp = myTemp.value;
  console.log("Temperature value is", temp);

  if (temp < 10) {
    console.log("It is freezing!!");
  } else if (temp >= 10 && temp < 20) {
    console.log("Nice and pleasant weather");
  } else if (temp >= 20 && temp < 35) {
    console.log("Sunny and warm");
  } else if (temp > 35) {
    console.log("It is burning hot");
  }
}
