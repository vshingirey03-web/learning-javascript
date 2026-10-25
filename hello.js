// Переменные: храним данные
const name = "Ваня";
let age = 24;

// Функция: переиспользуемый кусок кода
function greet(person) {
  return "Привет, " + person + "!";
}

console.log(greet(name));

// Условие
if (age >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}

// Цикл
for (let i = 1; i <= 3; i++) {
  console.log("Шаг номер " + i);
}