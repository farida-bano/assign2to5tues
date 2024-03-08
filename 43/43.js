"use strict";
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `the Great ${name}`);
}
// Original array
const magician_names = ["Hamza", "Mirza", "Harry Poter", "Dumbledor"];
// Making copy of orginal array through .slice()
const new_magicians = magician_names.slice();
// Modify the copied array to include "the Great"
const great_magicians = make_great(new_magicians);
// Show both arrays
console.log("Original Magicians Array:");
show_magicians(magician_names);
console.log("\nGreat Magicians Array':");
show_magicians(great_magicians);
