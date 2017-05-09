"use strict";

var finalCondimentPrice = 0
var CondimentChoice = "";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(sandwich) {
        var condimentPrices = {"Mayo": 1.50, "Ranch": 1.75, "Siracha Mayo": 1.80, "Mustard": 1.50, "No Condiments": 0.00};

        sandwich.addCondiment = function(value) {
          var userCondimentInput = value;
          console.log("userCondimentInput", userCondimentInput);
          var prop;
            for (prop in condimentPrices) {
                if(userCondimentInput.toLowerCase() === prop.toLowerCase()) {
                  finalCondimentPrice += condimentPrices[prop]
                  CondimentChoice = prop;
              }
           }
        }
  return SandwichMaker;
})(SandwichMaker || {});
