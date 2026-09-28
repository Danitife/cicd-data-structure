class CustomArray {
    constructor() {
        this.items = {};
        this.length = 0;
    }

    // methods
    myPush(el){
        this.items[this.length] = el;
        this.length++;
        return this.length;
    }
}


let fineCars = new CustomArray();

fineCars.myPush("Toyota");
fineCars.myPush("Honda");

console.log(fineCars);



// let favorites = new Array("Pounded Yam", "Spagetti", "Rice", "Beans", "Fufu");

// favorites.push("Eba"); // Add an element to the end of the array


// let names = ["Fedrick", "Quadri", "Ayo", "Abubakri", "Samuel"];

// names.push("Daniel");  // Add an element to the end of the array
// names.unshift("Adewale"); // Add an element to the beginning of the array
// names.pop(); // Remove the last element from the array
// names.shift(); // Remove the first element from the array