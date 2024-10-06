//tony and bruce comparing their BMI, use objects to implement the calculation
//BMI = mass / height**2 = mass / (height * height)
//for each of them, create an object with properties for their full name, mass, and height (tony stark and bruce wayne)
//create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects)
//store the BMI value to a property, and also return it from the method
//log to the console who has the higher BMI, together with the full name and the respective BMI

const tonyStark = {
  fullName: "Tony Stark",
  weight: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = parseFloat((this.weight / this.height ** 2).toFixed(1));
    return this.bmi;
  },
};

const bruceWayne = {
  fullName: "Bruce Wayne",
  weight: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = parseFloat((this.weight / this.height ** 2).toFixed(1));
    return this.bmi;
  },
};

tonyStark.calcBMI();
bruceWayne.calcBMI();

if (tonyStark.bmi > bruceWayne.bmi) {
  console.log(
    `${tonyStark.fullName}'s BMI (${tonyStark.bmi}) is higher than ${bruceWayne.fullName}'s (${bruceWayne.bmi})`
  );
} else if (bruceWayne.bmi > tonyStark.bmi) {
  console.log(
    `${bruceWayne.fullName}'s BMI (${bruceWayne.bmi}) is higher than ${tonyStark.fullName}'s (${tonyStark.bmi})`
  );
}
