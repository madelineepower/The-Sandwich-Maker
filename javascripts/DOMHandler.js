"use strict";
console.log("hi dom");
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadChoice");
breadChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addBread(selectedTopping);
    console.log(BreadChoice, finalBreadPrice);
    SandwichMaker.addTopping(finalBreadPrice);
    SandwichMaker.showToppings(BreadChoice);
  // Add the topping to the SandwichMaker to increase the total price by using addTopping method on sandwichmaker
});

var meatChooser = document.getElementById("meatChoice");
meatChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addMeat(selectedTopping);
    console.log(MeatChoice, finalMeatPrice);
    console.log(SandwichMaker);
    SandwichMaker.addTopping(finalMeatPrice);
    SandwichMaker.showToppings(MeatChoice);
  // Add the topping to the SandwichMaker to increase the total price
});
