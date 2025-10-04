let username = prompt("Please enter your name", "Harry Potter");

if (username != null) {
  document.getElementById("username").innerHTML =
  username;
}

let age = prompt("Please enter your age", "18");

if (age != null) {
  document.getElementById("age").innerHTML =
  age;
}

if (age < 18 && age > 0) {
  document.getElementById("advice-card").innerHTML =
  "Sorry " + username + ", you are not old enough to get a proper advice from us";

  document.getElementById(".box").className = ".has-background-greylight";
   
} else {let height = prompt("Please enter your height in meters", "1.60");

if (height != null) {
  document.getElementById("height").innerHTML =
  height;
}

let weight = prompt("Please enter your weight in kilograms", "72.5");

if (weight != null) {
  document.getElementById("weight").innerHTML =
  weight;
}

const bmi = weight / Math.pow(height,2) ;



}