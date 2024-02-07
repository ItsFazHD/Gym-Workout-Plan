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

  function maleLittle() {
    maintenance = bmr * 1.375;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.89;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.77;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.55;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function femaleLittle() {
    maintenance = bmr * 1.375;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.87;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.75;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.5;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function maleModerate() {
    maintenance = bmr * 1.55;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.89;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.79;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.58;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function femaleModerate() {
    maintenance = bmr * 1.55;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.88;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.76;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.53;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function maleVery() {
    maintenance = bmr * 1.725;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.91;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.82;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.64;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function femaleVery() {
    maintenance = bmr * 1.725;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.9;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.8;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.6;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function maleExtra() {
    maintenance = bmr * 1.9;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.92;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.84;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.67;
    document.getElementById("extremeWeightLoss").innerHTML =
      extremeWeightLoss.toFixed(0);
  }

  function femaleExtra() {
    maintenance = bmr * 1.9;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightLoss = maintenance * 0.91;
    document.getElementById("mildWeightLoss").innerHTML =
      mildWeightLoss.toFixed(0);

    weightLoss = maintenance * 0.82;
    document.getElementById("weightLoss").innerHTML = weightLoss.toFixed(0);

    extremeWeightLoss = maintenance * 0.64;
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
  } else if (
    document.getElementById("male").checked == true &&
    document.getElementById("little").checked == true
  ) {
    maleBmr();
    maleLittle();
  } else if (
    document.getElementById("female").checked == true &&
    document.getElementById("little").checked == true
  ) {
    femaleBmr();
    femaleLittle();
  } else if (
    document.getElementById("male").checked == true &&
    document.getElementById("moderate").checked == true
  ) {
    maleBmr();
    maleModerate();
  } else if (
    document.getElementById("female").checked == true &&
    document.getElementById("moderate").checked == true
  ) {
    femaleBmr();
    femaleModerate();
  } else if (
    document.getElementById("male").checked == true &&
    document.getElementById("veryActive").checked == true
  ) {
    maleBmr();
    maleVery();
  } else if (
    document.getElementById("female").checked == true &&
    document.getElementById("veryActive").checked == true
  ) {
    femaleBmr();
    femaleVery();
  }
};
