//create a function that will determine the retirement year of the user
//must calculate the user's current age
//must determine if the user is qualified for retirement
//must calculate the user's retirement year
//must calculate the remaining year for the user's retirement


function retirementYear(Birthyear, retirementAge) {
  const name = "John Denver";

  var currentYear = new Date().getFullYear();
  var age = currentYear - Birthyear;

  if (age >= retirementAge) {
    return "You are already retired";
  }

  var retirementYear = currentYear + (retirementAge - age);

  var remainingYear = retirementAge - age;
  return `${name} is ${age} years old and will be eligible for retirement in the year ${retirementYear}, there are ${remainingYear} remaining years left.`;
}
console.log(retirementYear(1997, 65));
