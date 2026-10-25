function sumTo(n) {
  let sum = 0;                    // пустая копилка
  for (let i = 1; i <= n; i++) {
    sum = sum + i; // здесь добавь i в копилку: sum = sum + i
  }
  return sum;                     // отдаём результат
}

console.log(sumTo(4));
console.log(sumTo(10));