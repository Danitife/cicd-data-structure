// // 

// let names = ["Daniel", "John", "Jane", "Mary", "Peter", "Paul", "Mark", "Luke", "Matthew", "James"];

// // console.log(names.delete(1));
// console.log(delete names[1]);
// console.log(names);

// // join, split, reverse, sort, filter, map, reduce, forEach, find, findIndex, some, every => array methods

// let favoriteFood = new Array("Eba", "Pounded yam", "Rice and beans", "Bread", "Beans and plantain");

// class Person {
//     constructor(skin_color, height, weight, hair, hair_length, gender){
//         this.skin_color = skin_color;
//         this.height = height;
//         this.weight = weight;
//         this.hair = hair;
//         this.hair_length = hair_length;
//         this.gender = gender;
//     }

//     blink(){
//         console.log(`${this.gender} is blinking`);
//     }
// }

// const daniel = new Person('light brown', '5ft 10in', '70kg', 'black', 'short', 'male', 'red');
// console.log(daniel);
// daniel.blink();

class CustomArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    // methods
    myPush(val){
        this.data[this.length] = val;
        this.length++;
        return this.length;
    }
}

let myArray = new CustomArray();
myArray.myPush("First value");
myArray.myPush("Second value");
console.log(myArray);