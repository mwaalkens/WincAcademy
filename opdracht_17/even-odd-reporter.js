for (let i=0; i<=20; i++){
    console.log('Is ' + i + ' odd or even?');
    let result = undefined;
    if (i % 2 == 0){
        result = "even";
    } else {
        result = "odd";
    }
    console.log(i +' is ' + result);
}