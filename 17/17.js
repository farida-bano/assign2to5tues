"use strict";
// Define the initial list of guests
let guests = ["Eve", "Alice", "Bob", "Frank", "Charlie", "David", "Grace"];
// Print the original invitations
console.log("Original invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, please join us for dinner.`);
});
// Inform people about the limited space
console.log("\nApologies, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
// Print invitations to the remaining two guests
console.log("\nInvitations to the remaining guests:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited for dinner.`);
});
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the list to confirm it's empty
console.log("\nRemaining guests list:", guests);
