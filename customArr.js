class CustomArr {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    myPush(val){
        this.data[this.length] = val;
        this.length ++;
        return this;
    }

    myPop(){
        if(this.length == 0) return;
        let delIdx = this.length - 1;
        
        let lastItem = this.data[delIdx]        
        
        // delete lastItem;
        delete this.data[this.length - 1]
        this.length --
        return lastItem;
    }

    myShift(){
        if(this.length == 0) return;
        let firstEl = this.data[0];
        for(let i = 0; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        
        delete this.data[this.length - 1];
        this.length --;
        return firstEl;
    }

    unshift(){}
}

let fav_food = new CustomArr();

fav_food.myPush("Beans")
fav_food.myPush("Garri");
fav_food.myPush("Fried Yam")
fav_food.myPush("Bean")
fav_food.myPush("Rice")
fav_food.myPush("Bread")
fav_food.myPush("Indomie")
// fav_food.myPop()
fav_food.myShift()
fav_food.myShift()
console.log(fav_food);

let fav_car = new Array()

fav_car.push("Urus")
fav_car.push("Royce")
fav_car.push("Brabus")

function rightAngleTriangle(){

}


rightAngleTriangle(10)
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

function pyramid(){

}

pyramid(3)

//   *
//  ***
// *****