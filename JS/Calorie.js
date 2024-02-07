let age;
let gender;
let height;
let weight;
let activityLevel;

document.getElementById("submitBtn").onclick = function () {
  age = document.getElementById("age").value;
  gender = document.querySelector("input[name = gender]:checked").value;
  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;
  activityLevel = document.querySelector(
    "input[name = activity]:checked"
  ).value;

  function maleBmr() {
    maleBmr = 10 * weight + 6.25 * height - 5 * age + 5;
    bmr = maleBmr;
    document.getElementById("bmr").innerHTML = bmr;
  }

  function femaleBmr() {
    femaleBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    bmr = femaleBmr;
    document.getElementById("bmr").innerHTML = bmr;
  }

  function maleSedentary() {
    maintenance = bmr * 1.2;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.87;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.74;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.48;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function femaleSedentary() {
    maintenance = bmr * 1.2;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.86;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.71;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.42;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  if (
    document.getElementById("male").checked == true &&
    document.getElementById("sedentary").checked == true
  ) {
    maleBmr();
    maleSedentary();
  } else if (
    document.getElementById("female").checked == true &&
    document.getElementById("sedentary").checked == true
  ) {
    femaleBmr();
    femaleSedentary();
  } else {
    document.getElementById("bmr").innerHTML = "Please enter your details";
  }
};
