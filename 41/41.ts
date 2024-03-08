// Define a function that takes an array of magician names as input and prints each name.
function show_magicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

// Define an array
const magician_names: string[] = ["Hamza", "Mirza", "Usman", "Areeba"];

// Call the show_magicians function with the array
show_magicians(magician_names);