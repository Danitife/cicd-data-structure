function countDown(n){
    if(n === 0) {
        console.log("Done");
        return;        
    }
    console.log(n);
    countDown(n - 1);
}

// countDown(10);

function factorial(n){
    if(n === 0){
        return 1
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
