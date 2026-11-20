//Пример 1

let cardType = "GOLD";

let liters = 10;

let points = 0;

if (cardType === "SILVER") {
  points = liters * 0.5;
} else if (cardType === "GOLD") {
  points = liters * 0.75;
} else if (cardType === "PLATINUM") {
  points = liters;
} else {
  console.log("Неизвестный тип карты");
}

console.log(`Вы получили ${points} баллов`);

//Пример 2

let fuelType = "АИ-98";

let fuelLiters = 0;

let sum = 1000;

if (fuelType === "АИ-92") {
  fuelLiters = sum / 87.8;
} else if (fuelType === "АИ-95") {
  fuelLiters = sum / 109.9;
} else if (fuelType === "АИ-98") {
  fuelLiters = sum / 135;
} else if (fuelType === "ДТ") {
  fuelLiters = sum / 99.9;
} else if (fuelType === "Газ") {
  fuelLiters = sum / 48.8;
} else {
  console.log("Такой тип топлива не найден");
}

console.log(`Количество литров: ${fuelLiters.toFixed(2)}`);

//Пример 3

let amount = 10_000;

let currency = "USD";

let rate = 0;

if (currency === "USD") {
  rate = 87.4;
} else if (currency === "RUB") {
  rate = 1.06;
} else if (currency === "CNY") {
  rate = 13.1;
} else if (currency === "EUR") {
  rate = 96.09;
}

if (rate === 0) {
  console.log("Такой валюты не найдено");
} else {
  let result = amount / rate;
  console.log(`Курс: ${rate}, сумма: ${Math.round(result)}`);
}
