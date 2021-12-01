const makePizza = function (numberPersons) {
    console.log('Make the dough');
    console.log('Decorate the Pizza');
    console.log('Put the pizza in the oven');
    console.log('Cut the pizza in ' + numberPersons + ' pieces');
    console.log('Everyone gets ' + Math.floor((1 / numberPersons) * 100) + '% of the pizza');
}

const makeSushi = function () {
    console.log('Just do not');
}

makePizza(3);
makeSushi();
makePizza(7);
makeSushi();
makeSushi();
