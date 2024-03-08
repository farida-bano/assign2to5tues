"use strict";
// List of current usernames
const current_users = ['Hamza', 'Usman', 'Ayesha', 'Areeba', 'Zainab'];
// List of new usernames
const new_users = ['Ali', 'HAMZA', 'Zain', 'Dumbledor', 'AREEBA'];
// Loop through the new_users list
for (const new_username of new_users) {
    // Convert the new username to lowercase for case insensitivity
    const lowercase_new_username = new_username.toLowerCase();
    // Check if the lowercase version of the new username exists in the current_users list
    if (current_users.some(current_user => current_user.toLowerCase() === lowercase_new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
