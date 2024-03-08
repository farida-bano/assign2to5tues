function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`You selected "${size}" size shirt with "${message}" prints on it.`);
}

//Call function with default size & message
make_shirt();

// Call function with medium size & different message
make_shirt('Medium', 'I Love Governor Sindh');

// Call function with small size & different message
make_shirt('Small', 'I Love also JavaScript');