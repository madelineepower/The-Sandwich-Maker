"use strict";

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
              finalSandwichDiv.innerHTML = `<h4>Order Total:</h4><p>$${totalPrice.toFixed(2)}</p>`;
      },
        showToppings: function(toppingChoices) {
            finalSandwich.push(toppingChoices);
            console.log("finalSandwich", finalSandwich);
            finalSandwichDiv.innerHTML += `<h4>Your Sandwich has:</h4><p>${finalSandwich}</p>`;

      }
  };
  return totalPrice;
  return finalSandwich;
  return SandwichMaker;
})(SandwichMaker || {});
