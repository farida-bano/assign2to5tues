"use strict";
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
}
// Call the function with different numbers of arguments
makeSandwich('chicken', 'cheese', 'butter');
makeSandwich('egg', 'butter', "ketchup", "chicken");
makeSandwich('peanut butter', 'sauce');
