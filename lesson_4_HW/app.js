// Пример 1

const cardNumbers = [
  "46782346",
  "45781218",
  "79874568",
  "12157845",
  "36151845",
  "41250895",
  "41201961",
];

let visaCount = 0;

for (const cardNumber of cardNumbers) {
  if (cardNumber[0] === "4") {
    visaCount++;
  }
}

console.log(`Карт VISA ${visaCount} из ${cardNumbers.length}`);

// Пример 2

const taxIds = [
  "01212201212345",
  "11212201212345",
  "21212201212345",
  "11212201212345",
  "11212201212345",
  "01212201212345",
  "21212201212345",
];

let companyCount = 0;
let womenCount = 0;
let menCount = 0;

for (const taxId of taxIds) {
  switch (taxId[0]) {
    case "0":
      companyCount++;
      break;
    case "1":
      womenCount++;
      break;
    case "2":
      menCount++;
      break;
    default:
      console.log(`Ничего не найдено`);
      break;
  }
}
console.log(
  `Компаний ${companyCount}, Женщин ${womenCount}, Мужчин ${menCount}`,
);

// Пример 3

const numbers = [0, 15, 0, 28, 34, 23, 0, 21, 87, 0, 12, 9, 0, 6, 7, 0, 2];

const nonZeroNumbers = [];

for (const number of numbers) {
  if (number !== 0) {
    nonZeroNumbers.push(number);
  }
}

console.log(`Готовый ответ без 0: ${nonZeroNumbers}`);
