function isPalindrome(str){
    let reversedStr = "";
    for(let i = str.length -1; i >= 0; i--){        
        // reversedStr += str[i].toLowerCase(); // dad
        reversedStr += str[i]; // dad
    }
    return str.toLowerCase() == reversedStr.toLowerCase() ? console.log(`${str} is a palindrome`) : console.log(`${str} is not a palindrome`)
}


isPalindrome("Race car"); // racecar is a palindrome
isPalindrome("hello"); // hello is not a palindrome

function isPalindromeRecursion(str){
    if(str.length === 0 || str.length === 1){
        return true;
    }
    if(str[0].toLowerCase() !== str[str.length - 1].toLowerCase()){
        return false;
    }
    return isPalindromeRecursion(str.slice(1, str.length - 1));
}

// console.log(isPalindromeRecursion("Race car"));

console.log("Daniel".slice(5), "Last value") // anie
console.log("madam")

// "d" != "l"

function maxNum(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        return max;
    }
}
// [1, 4, 6, 8, 2, 3, 5, 7, 9, 12] let max = arr[0];