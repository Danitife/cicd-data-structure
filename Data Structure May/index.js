// Write an algorithm that sums two integers

function sumTwoNum(num1, num2) {
    return num1 + num2;
}

console.log(sumTwoNum(5, 7));
console.log(sumTwoNum(33, 54));


// write an algorithm that finds the largest number in an array
// write an algorithm that adds all the numbers in an array
// write an algorithm that adds (n) to the array
let numbers = [3, 5, 2, 9, 89, 45, 23, 66, 88, 11, 21, 67];

function addNToArray(arr, n) { }

function findLargestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    };
    return largest;
}

console.log(findLargestNum(numbers), 'largest number in the array');

function sumOfArray(arr) { }

function addNToArray(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sums = arr[i] + n;
        newArr.push(sums);
    }

    return newArr;
}
console.log(addNToArray(numbers, 7));

// write an that checks if a word is a palindrome => Madam 
// write an algorithm that checks if a number is prime number or even number
