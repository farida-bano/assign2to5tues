let personName: string = "John Doe";

// Lowercase
let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase Name:", lowercaseName);

// Uppercase
let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase Name:", uppercaseName);

// Titlecase
let titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase Name:", titlecaseName);
