const age = 12;
const isFemale = false;
const driverSatus = 'noBob';
const firstName = 'Bob';
const totalAmount = 49;



if (age >= 18 && age <= 25) {
    console.log("You are allowed in and get a 50% off!");
} else if (age >= 18) {
    console.log("You are allowed in!");
} else {
    console.log("You are too young and are kindly requested to stay outside")
}

if (firstName == 'Sarah' || firstName == 'Bram') {
    console.log("You get a free beer tonight due to our 50 year anniversary!")
}


if (isFemale == true) {
    console.log("It's Ladies Night, you get a discount");
} else {
    console.log("Boy's don't get discount");
}


if (totalAmount >= 100) {
    console.log("You get a free bottle of champagne")
} else if (totalAmount >= 60) {
    console.log("You get a free portion of nachos");
} else if (totalAmount >= 50) {
    console.log("You get free Bitterballen");
}

if (driverSatus == 'Bob') {
    console.log("Behave tonight, don't drink alcohol");
} else {
    console.log("Feel free, you can drink everything you want");
}
