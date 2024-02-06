let height;
let weight;
let total;

document.getElementById("submitBtn").onclick = function () {
  height = document.getElementById("height").value;
  height = Number(height / 100);

  weight = document.getElementById("weight").value;
  weight = Number(weight);

  height = Math.pow(height, 2);

  total = weight / height;
  let rounded = total.toFixed(1);

  if (total >= 27.5) {
    document.getElementById("BMI").innerHTML =
      "Your BMI is: " + rounded + " You are obese";
    document.getElementById("hideImg").style.display = "block";
  } else if (total >= 23) {
    document.getElementById("BMI").innerHTML =
      "Your BMI is: " + rounded + " You are overweight";
  } else if (total >= 18.5) {
    document.getElementById("BMI").innerHTML =
      "Your BMI is: " + rounded + " You are healthy";
  } else if (total < 18.5) {
    document.getElementById("BMI").innerHTML =
      "Your BMI is: " + rounded + " You are underweight";
  } else {
    return (document.getElementById("BMI").innerHTML =
      "Please enter a height and weight");
  }
};
