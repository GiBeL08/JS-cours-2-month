// Пример 1
function evenOddSum(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  return [evenSum, oddSum];
}

console.log(evenOddSum([50, 60, 60, 45, 71]));

// Пример 2

function getPrice(price, discount) {
  const discountAmount = (price * discount) / 100;
  return price - discountAmount;
}

console.log(getPrice(1000, 40));
console.log(getPrice(1000, 20));
console.log(getPrice(1000, 25));
console.log(getPrice(10_000, 55));

// Пример 3

function splitBill(price, people) {
  const share = Math.floor(price / people);
  const remainder = price % people;
  const bill = [];

  for (let i = 0; i < people; i++) {
    bill.push(share);
  }

  bill[0] += remainder;

  return bill;
}
console.log(splitBill(100, 4)); // [25, 25, 25, 25]
console.log(splitBill(2500, 5)); // [500, 500, 500, 500, 500]
console.log(splitBill(1000, 3)); // [334, 333, 333]
