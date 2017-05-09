"use strict";
console.log("hey");

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  var finalSandwich = [];
  var finalSandwichDiv = document.getElementById("finalSandwich")

  // Return the public interface that other code can interact with
  return {
        addTopping: function(toppingPrice) {
              totalPrice += toppingPrice;
              console.log(totalPrice);
              finalSandwichDiv.innerHTML = totalPrice;
      },
        showToppings: function(toppingChoices) {
            finalSandwich.push(toppingChoices);
            console.log("finalSandwich", finalSandwich);
            finalSandwichDiv.innerHTML += `<p>${finalSandwich}</p>`;

      }
  };
  return totalPrice;
  return finalSandwich;
  return SandwichMaker;
})();
