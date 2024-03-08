"use strict";
let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
let cantMakeIt = guestList[1];
console.log(cantMakeIt, "can't make it to dinner.\n");
// Removed guest who cant make it from the array
guestList.splice(1, 1, "Ali");
guestList.forEach(guest => {
    console.log(`Assalam 0 Alaikum Dear ${guest}, I would like to invite you to dinner with me`);
});
console.log("\nGood news! We found a bigger dinner table!\n");
// Add one new guest to the beginning of the array
guestList.unshift("Osama");
// Add one new guest to the middle of the array
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Zain");
// Add one new guest to the end of the array
guestList.push("Sherry");
console.log("Updated List of Guests:\n");
guestList.forEach(guest => {
    console.log(`Assalam 0 Alaikum Dear ${guest}, I would like to invite you to dinner with me`);
});
// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.\n");
// Using While-loop to remove guests from the list until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
// Print invitations to the two people still on the list
console.log("\nInvitations to the Last 2 guests:\n");
guestList.forEach(person => console.log(`Dear ${person}, you're still invited to dinner.`));
// Removing last two elements
guestList.pop();
guestList.pop();
// Print the empty list to confirm
console.log("\nEmpty list:", guestList);
