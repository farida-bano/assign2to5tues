let alienColor: string = 'green';

// Check if the alien's color is green
if (alienColor == 'green') {
    // Print a message 
    console.log("Congratulations! You just earned 5 points for shooting the alien!");
} else {
    // This block will not be executed if the condition is met
    console.log("Congratulations! You just earned 10 points!"); 
}


// Second version of the program that runs the else block (alien's color is not green):

if(alienColor == 'red'){
    // This block will not be executed buz conditions not met
    console.log("Congratulations! You just earned 5 points for shooting the alien!"); 
} else {
    // Print a message
    console.log("Congratulations! You just earned 10 points!");
}