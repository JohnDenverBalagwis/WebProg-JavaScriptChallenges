//create a function called calc tip that will takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
//returns the corresponding tip, calculated based on the rules above
//create an array of `bills` containing the following data: 125, 555, 44
//create an array of `tips`, containing the tip value for each bill, calculated from the function you created
//create an array "total" containing the total values, so the bill + tip

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

function calcTip(bills) {
  if (bills >= 50) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}

console.log(`Bills: ${bills} \nTips: ${tips}\nTotals: ${total}`);
