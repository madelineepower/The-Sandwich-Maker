"use strict";

var finalBreadPrice = 0;
var BreadChoice = [];

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
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
  return SandwichMaker;
})(SandwichMaker || {});
