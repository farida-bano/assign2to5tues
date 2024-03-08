"use strict";
let personName = "John Doe";
// Lowercase
let lowercaseName = personName.toLowerCase();
console.log("Lowercase Name:", lowercaseName);
// Uppercase
let uppercaseName = personName.toUpperCase();
console.log("Uppercase Name:", uppercaseName);
// Titlecase
let titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase Name:", titlecaseName);
