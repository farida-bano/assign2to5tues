"use strict";
let guestlist = ["Sadia", "Hina", "Saba", "Noreen"];
let dontCome = guestlist[0];
console.log(dontCome, "nahi aa sakhti");
guestlist.splice(0, 1, "Humaira");
console.log("Good new !we have found a bigger table for dinner.");
guestlist.unshift("Ramsha");
guestlist.push("Safina");
let middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Osama");
console.log("update list of our guests");
guestlist.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest},would you like to dinnerwith me?`));
