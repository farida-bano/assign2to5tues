"use strict";
let placesToVisit = ["Tokyo", "Berlin", "Nairobi", "Denver", "Helsinki", "Atlanta"];
console.log("Orginal Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list by making copy of array
console.log("\nAlphabetical Order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("\nStill in Original Order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
// Print the list to show it’s back to its original order
console.log("\nBack to Original Order:", placesToVisit);
// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:", placesToVisit);
// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log("\nSorted in Reverse Alphabetical Order:", placesToVisit);
