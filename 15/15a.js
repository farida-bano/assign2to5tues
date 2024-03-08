"use strict";
let guestlist = ["Sadia", "Hina", "Saba", "Noreen"];
let dontCome = guestlist[0];
console.log(dontCome, "nahi aa sakhti");
guestlist.splice(0, 1, "Humaira");
guestlist.forEach(guest => console.log(`Assalam u Alaikum ${guest},would you like to dinnerwith me?`));
