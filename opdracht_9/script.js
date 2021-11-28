const age = 20;
const isFemale = false;
const driverSatus = 'noBob';

if (age >= 18) {
    console.log("You are allowed in");
    if (isFemale == true) {
        console.log("It's Ladies Night, you get a discount");
    } else {
        console.log("Boy's don't get discount");
    }
    if (driverSatus == 'Bob') {
        console.log("Behave tonight, don't drink alcohol");
    } else {
        console.log("Feel free, you can drink everything you want");
    }
} else {
    console.log("You are too young and are kindly requested to stay outside")
}
