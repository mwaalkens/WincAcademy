// const checkIfAdult= function(age){
//     if(age>=18){
//         return true;
//     } else{
//         return false;
//     }
// }

// const greetPeople = function (age){
//     if (checkIfAdult(age) == true){
//         return "Hello there"
//     } else {
//         return "Hey kiddo"
//     }
// }

// console.log(greetPeople(15));
// console.log(greetPeople(55));

const calculateVAT = function(baseprice, VATpercentage){
    return baseprice* VATpercentage;
}

const calculatePrice = function(baseprice, VATprice){
    return baseprice+ VATprice;
}

const returnVAT= function(baseprice, VAT){
    let VATprice = calculateVAT(baseprice, VAT);
    return calculatePrice(baseprice,VATprice)
}

console.log(returnVAT(20, 0.21));
console.log(returnVAT(13, 0.09));
