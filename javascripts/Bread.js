"use strict";
console.log("hi Bread");
var finalBreadPrice = 0;
var BreadChoice = [];

// This SandwichMaker IIFE augments the original one
var addingBread = (function(sandwich) {
        var breadPrices = {"White": 1.50, "Wheat": 3.50, "Gluten Free": 5.00, "No Bread": 0.00};

        sandwich.addBread = function(value) {
          var userBreadInput = value;
          console.log("userinput", userBreadInput);
          var prop;
            for (prop in breadPrices) {
                if(userBreadInput.toLowerCase() === prop.toLowerCase()) {
                  finalBreadPrice += breadPrices[prop];
                  BreadChoice = prop;
              }
           }
        };
  // return finalBreadPrice;
  return addingBread;
})(SandwichMaker || {});
