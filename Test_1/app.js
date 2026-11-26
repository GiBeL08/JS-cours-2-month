// Задание 1

function countVowels(text) {
  const vowels = "аеёиоуыэюя";
  const result = {};

  for (const char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

console.log(
  countVowels(
    "Написать программу которая считает кол-во гласных букв в тексте. Причем результатом должен быть объект где ключом будет буква, а значением количество её вхождений в тексте.",
  ),
);

// Задание 2

const numbers = [12, 5, 89, 34, 7, 61];

let maxNumber = numbers[0];

for (const num of numbers) {
  if (num > maxNumber) {
    maxNumber = num;
  }
}

console.log(`Максимальное число: ${maxNumber}`);
