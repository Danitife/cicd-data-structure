// O(n) - linear time complexity: The more the input size, the longer it takes to complete the operation.

let customers = [];

// for(let i = 0; i <= 1000000; i++) customers.push(i);

// console.log(customers);
// console.time("Shift");

// while(customers.length) customers.shift();
// console.timeEnd("Shift");

// O(1) - constant time complexity: The time taken to complete the operation is constant regardless of the input size.

let customers2 = Array.from({length: 100000}, (_, i) => i);
console.time("Pop");
while(customers2.length) customers2.pop();
console.timeEnd("Pop");

function hasDuplicateSlow(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) return true;
        }
    }
    return false;
}

function hasDuplicateFast(arr){
    let seen = new Set();
    for(let i = 0; i < arr.length; i++){
        if(seen.has(arr[i])) return true;
        seen.add(arr[i]);
    }
    return false;
}

// RECURSION

function countdown(num){
    if(num <= 0) return; // base case
    console.log(num);
    countdown(num - 1);
}

countdown(20);


function factorial(num){
    if(num <= 1) return 1; // base case
    return num * factorial(num - 1);
}

function isPalindrome(str){
    if(str.length <= 1) return true; // base case
    if(str[0] !== str[str.length - 1]) return `${str} is not a palindrome`;
    isPalindrome(str.slice(1, -1));
    return `${str} is a palindrome`;
}


console.log(isPalindrome("madan"));

hideDigits(123456789); // ******789

checkExtention("file.txt"); // Must be a pdf file
checkExtention("dan.jpeg"); // Must be a pdf file
checkExtention("info.pdf"); // Valid file

clockFormatter(20260928); // 2026-09-28