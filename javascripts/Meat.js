"use strict";
var finalMeatPrice = 0
var MeatChoice = "";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
  var meatPrices = {"Turkey": 1.50, "Bacon": 1.70, "Salami": 1.80, "Ham": 1.80, "Pepperoni": 1.75, "No Meat": 0.00}


        sandwich.addMeat = function(value) {
          var userMeatInput = value;
          console.log("userMeatinput", userMeatInput);
          var prop;
            for (prop in meatPrices) {
                if(userMeatInput.toLowerCase() === prop.toLowerCase()) {
                  finalMeatPrice += meatPrices[prop]
                  MeatChoice = prop;
              }
           }
        }
  return SandwichMaker;
})(SandwichMaker || {});
