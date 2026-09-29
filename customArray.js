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
    myPop(){
        if(this.length === 0) return undefined;
        const lastItem = this.length - 1;
        const deletedItem = this.items[lastItem];
        delete this.items[lastItem];
        this.length--;
        return deletedItem;
    }
    myShift(){
        if(this.length === 0) return undefined;
        const firstItem = this.items[0];
        for(let i=0; i < this.length -1; i++){
            this.items[i] = this.items[i + 1];
        }
        delete this.items[this.length - 1];
        this.length--;
        return firstItem;
    }
    unshift(el){} // Add element to the beginning of the array
}


let fineCars = new CustomArray();

fineCars.myPush("Toyota");
fineCars.myPush("Honda");
fineCars.myPush("Lexus");
fineCars.myPush("Nissan");

fineCars.myPop();
console.log(fineCars);


// write a function that creates a right angle triangle using astericks(*)
// rightAngleTriangle(10);

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// write a function that creates a pyramid using astericks(*)

pyramid(5);

//     *
//    ***
//   *****
//  *******
// *********