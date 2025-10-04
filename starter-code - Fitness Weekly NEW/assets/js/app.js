const username = prompt("Please enter your name", "Enter your name here"); //Get the name input
document.querySelector("#username").innerHTML = username; //Displays the name

const age = prompt("Please enter your age", "Enter your age here"); //Get the age input
document.querySelector("#age").innerHTML = age; //Displays the age

const adviceCardClass = document.querySelector("#advice-card");

//Outputs the advice
if (age < 18) { //Stops the program if user is under 18 years old
  document.querySelector("#advice-text").innerHTML = "Sorry " + username + ", you are not old enough to get a proper advice from us"; //Sorry message 
  adviceCardClass.classList.add("has-background-grey-light"); //Makes background light grey
} else {
  const height = prompt("Please enter your height in meters", "Enter your height here, for example 1.80"); //Get the height input;
  document.querySelector("#height").innerHTML = height; //Displays the height

  const weight = prompt("Please enter your weight in kg", "Enter your weight here, for example 75"); //Get the weight input;
  document.querySelector("#weight").innerHTML = weight; //Displays the weight

  const bmi = weight / height ** 2; //calculates BMI

  if (bmi < 18.5) {
    document.querySelector("#advice-text").innerHTML = "Your BMI: " + bmi + "<br/>You are under weight<br/>Start with a personal trainer"; //Text for the underweight classification advice
    adviceCardClass.classList.add("has-background-warning"); //Adds styling to the advice card
  } else if (bmi < 25) {
    document.querySelector("#advice-text").innerHTML = "Your BMI: " + bmi + "<br/>You are at a normal weight<br/>Start with any programme"; //Text for the normal weight classification advice
    adviceCardClass.classList.add("has-background-success"); //Adds styling to the advice card
  } else if (bmi < 30) {
    document.querySelector("#advice-text").innerHTML = "Your BMI: " + bmi + "<br/>You are slightly over weight<br/>Start with cardio training"; //Text for the slightly overweight classification advice
    adviceCardClass.classList.add("has-background-warning"); //Adds styling to the advice card
  } else if (bmi >= 30) {
    document.querySelector("#advice-text").innerHTML = "Your BMI: " + bmi + "<br/>You are obese<br/>Start with a personal trainer"; //Text for the obese classification advice
    adviceCardClass.classList.add("has-background-danger"); //Adds styling to the advice card
  }
}