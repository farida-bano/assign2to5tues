"use strict";
// Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop 
for (const number of numbers) {
    // Make Empty Variable
    let ordinalSuffix;
    // if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinalSuffix = 'st';
    }
    else if (number === 2) {
        ordinalSuffix = 'nd';
    }
    else if (number === 3) {
        ordinalSuffix = 'rd';
    }
    else {
        ordinalSuffix = 'th';
    }
    // Print the ordinal number with the proper suffix
    console.log(`${number}${ordinalSuffix}`);
}
