let age = 15;
let name = "artem";
let isStudent = false;
let myString = "Зберігайте спокій та продовжуйте";
let myNumber = 10;
let myNull = null;

console.log(age, name, isStudent, myString, myNumber, myNull);
// +10
console.log(age, name, isStudent, myString, myNumber + 10, myNull);

setTimeout(() => {
  let confirmation = confirm("Підтвердіть дію");

  if (confirmation) {
    alert("Дія підтвердженна");
  } else {
    alert("дія відхилена");
  }
}, 1000);

setTimeout(() => {
  alert("Дія небезпечна");

  let confirmation = confirm("Підтвердіть дію");
  if (confirmation) {
    alert("Дія підтвердженна");
  } else {
    alert("дія відхилена");
  }
}, 5000);

setTimeout(() => {
  let userName = prompt("Ваше ім'я");
  alert("Привіт, " + userName);
}, 100);
