// Array of usernames
const usernames: string[] = ['admin', 'Hamza', 'Usman', 'Ayesha', 'Areeba'];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username === 'admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}