"use strict";
console.log("hi");
var finalVeggiePrice = 0
var VeggieChoice = "";

var addingVeggie = (function(sandwich) {
  var veggiePrices = {"Lettuce": 1.50, "Tomato": 1.75, "Onion": 1.80, "Peppers": 1.90, "Pickles": 1.00, "No Veggies": 0.00};


        sandwich.addVeggie = function(value) {
          var userVeggieInput = value;
          console.log("userVeggieinput", userVeggieInput);
          var prop;
            for (prop in veggiePrices) {
                if(userVeggieInput.toLowerCase() === prop.toLowerCase()) {
                  finalVeggiePrice += veggiePrices[prop]
                  VeggieChoice = prop;
              }
           }
        }
  // return finalMeatPrice;
  return addingVeggie;
})(SandwichMaker || {});
