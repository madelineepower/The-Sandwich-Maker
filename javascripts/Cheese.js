"use strict";
console.log("hi cheese");
var finalCheesePrice = 0
var CheeseChoice = "";

// This SandwichMaker IIFE augments the original one
var addingCheese = (function(sandwich) {
        var cheesePrices = {"American": 1.50, "Provolone": 1.75, "Swiss": 1.80, "Cheddar": 1.90, "No Cheese": 0.00};
        sandwich.addCheese = function(value) {
          var userCheeseInput = value;
          console.log("userCheeseinput", userCheeseInput);
          var prop;
            for (prop in cheesePrices) {
                if(userCheeseInput.toLowerCase() === prop.toLowerCase()) {
                  finalCheesePrice += cheesePrices[prop]
                  CheeseChoice = prop;
              }
           }
        }
  return addingCheese;
})(SandwichMaker || {});
