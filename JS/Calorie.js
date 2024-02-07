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
  //activityLevel = document.querySelector("activityLevel").value;

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

  if (document.getElementById("male").checked == true) {
    maleBmr();
  } else if (document.getElementById("female").checked == true) {
    femaleBmr();
  } else {
    document.getElementById("bmr").innerHTML = "Please enter your details";
  }
};

//document.getElementById("hiddenTable").style.display = "block";
