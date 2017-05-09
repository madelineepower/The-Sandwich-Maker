"use strict";
console.log("hi dom");
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
// Variable to hold topping that the user selects
var selectedTopping;

//////////////  BREAD   //////////////////////////////////
var breadChooser = document.getElementById("breadChoice");
breadChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addBread(selectedTopping);
    SandwichMaker.addTopping(finalBreadPrice);
    SandwichMaker.showToppings(BreadChoice);
});

//////////////  MEAT  //////////////////////////////////
var meatChooser = document.getElementById("meatChoice");
meatChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addMeat(selectedTopping);
    SandwichMaker.addTopping(finalMeatPrice);
    SandwichMaker.showToppings(MeatChoice);
});

//////////////  CHEESE   //////////////////////////////////
var cheeseChooser = document.getElementById("cheeseChoice");
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addCheese(selectedTopping);
    SandwichMaker.addTopping(finalCheesePrice);
    SandwichMaker.showToppings(CheeseChoice);
});

//////////////  VEGGIE   //////////////////////////////////
var veggieChooser = document.getElementById("veggieChoice");
veggieChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addVeggie(selectedTopping);
    SandwichMaker.addTopping(finalVeggiePrice);
    SandwichMaker.showToppings(VeggieChoice);
});

//////////////  CONDIMENT   //////////////////////////////////
var condimentChooser = document.getElementById("condimentChoice");
condimentChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    SandwichMaker.addCondiment(selectedTopping);
    SandwichMaker.addTopping(finalCondimentPrice);
    SandwichMaker.showToppings(CondimentChoice);
});
