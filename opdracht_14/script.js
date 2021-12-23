const checkNumber = function(number1){
    if (number1>100){
        return true;
    } else {
        return false;
    }
}

let number2 = checkNumber(200);
console.log(number2);
number2 = checkNumber(100);
console.log(number2);
number2 = checkNumber(99);
console.log(number2);

const bouncerBrenda = function (maxPeople, numberPeople, age){
    if(age < 18){
        return "This is a club for adults"  
    } else if(numberPeople >= maxPeople){
        return "It's too busy now, come back later"
    } else{
        return "Come in!"
    }
}

result = bouncerBrenda(20,21,17);
console.log(result);
result = bouncerBrenda(20,21,20);
console.log(result);
result = bouncerBrenda(50,21,20);
console.log(result);

const average = function(number1, number2, number3, number4, number5){
    let average = (number1+number2+number3+number4+number5)/5;
    average = Math.round(average);
    return average;
}

result = average(10,45,23,1,2);
console.log(result);
result = average(100,45,23,1,2);
console.log(result);
