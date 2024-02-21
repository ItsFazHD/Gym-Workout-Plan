let age;
let gender;
let height;
let weight;
let activityLevel;

document.getElementById("submitBtn2").onclick = function () {
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

    mildWeightGain = maintenance * 1.13;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.26;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.52;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function femaleSedentary() {
    maintenance = bmr * 1.2;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.14;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.29;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.58;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function maleLittle() {
    maintenance = bmr * 1.375;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.11;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.23;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.45;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function femaleLittle() {
    maintenance = bmr * 1.375;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.13;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.25;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.5;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function maleModerate() {
    maintenance = bmr * 1.55;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.11;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.21;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.42;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function femaleModerate() {
    maintenance = bmr * 1.55;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.12;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.24;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.47;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function maleVery() {
    maintenance = bmr * 1.725;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.09;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.18;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.36;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function femaleVery() {
    maintenance = bmr * 1.725;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.1;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.2;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.4;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function maleExtra() {
    maintenance = bmr * 1.9;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.08;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.16;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.33;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
  }

  function femaleExtra() {
    maintenance = bmr * 1.9;
    document.getElementById("maintenance").innerHTML = maintenance.toFixed(0);

    mildWeightGain = maintenance * 1.09;
    document.getElementById("mildWeightGain").innerHTML =
      mildWeightGain.toFixed(0);

    weightGain = maintenance * 1.18;
    document.getElementById("weightGain").innerHTML = weightGain.toFixed(0);

    fastWeightGain = maintenance * 1.36;
    document.getElementById("fastWeightGain").innerHTML =
      fastWeightGain.toFixed(0);
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
  } else if (
    document.getElementById("male").checked == true &&
    document.getElementById("extraActive").checked == true
  ) {
    maleBmr();
    maleExtra();
  } else if (
    document.getElementById("female").checked == true &&
    document.getElementById("extraActive").checked == true
  ) {
    femaleBmr();
    femaleExtra();
  }
};
