//tony`s tip calculator version 2
//create an array of `bills` containing all 10 test bill values
//create an empty array for the tips and the totals (`tips` and `totals`)
//use the `calcTip` function you wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
//write a function called `calcAverage` which takes an array called `arr` as an argument. This function calculates the average of all numbers in the given array.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
  if (bills >= 50) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(`Bills: ${bills} \n\nTips: ${tips}\n\nTotals: ${totals}`);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return parseFloat((sum / arr.length).toFixed(1));
}

console.log(`\nAverage tip: ${calcAverage(tips)}`);

