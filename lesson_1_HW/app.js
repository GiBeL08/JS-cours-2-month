const movieName = "Тайна Коко";
const adultsCount = 2;
const adultTicketPrice = 450;
const childrenCount = 3;
const childTicketPrice = 300;
const totalCost =
  adultsCount * adultTicketPrice + childrenCount * childTicketPrice;

console.log("Семейный поход в кино");
console.log("Название фильма:", movieName);
console.log("Количество взрослых:", adultsCount);
console.log("Цена взрослого билета:", adultTicketPrice);
console.log("Количество детей:", childrenCount);
console.log("Цена детского билета:", childTicketPrice);
console.log("Общая стоимость:", totalCost);

const heightCm = 176;
const weightKg = 55;

const heightM = heightCm / 100;
const heightInch = heightCm / 2.54;

const weightG = weightKg * 1000;
const weightLb = weightKg * 2.20462;
const weightOz = weightKg * 35.27396;
const weightCarat = weightG * 5;

console.log("Рост и вес");
console.log("Рост в сантиметрах:", heightCm);
console.log("Рост в метрах:", heightM);
console.log("Рост в дюймах:", heightInch);
console.log("Вес в килограммах:", weightKg);
console.log("Вес в граммах:", weightG);
console.log("Вес в фунтах:", weightLb);
console.log("Вес в унциях:", weightOz);
console.log("Вес в каратах:", weightCarat);
