"use strict";
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(option => {
        const [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function with required information and additional name-value pairs
const myCar = createCar('Toyota', 'Camry', 'color: blue', 'year: 2022', 'sunroof: true');
// Print the object to ensure all information was stored correctly
console.log(myCar);
