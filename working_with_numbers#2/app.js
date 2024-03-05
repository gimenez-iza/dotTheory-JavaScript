//Doing the Math Code Challenge
//Create a variable named salesTotal. Assign it the total of retailPrice multiplied by quantity.

const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;

let salesTotal = retailPrice * quantity;

// Create another variable named profit. It should hold the value of the salesTotal variable minus the wholesalePrice multiplied by the quantity. In other words, if you sold 47 items for 9.99 but only paid 5.45 for each item, how much money did you make?

let profit = salesTotal - wholesalePrice * quantity;

// Create one last variable name profitPerUnit. In that variable store the amount of profit you made for each unit. You can calculate this by dividing the profit by the quantity.

let profitPerUnit = profit / quantity;

