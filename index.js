class Car{
    constructor(name, model, color, year, steering){
        this.name = name;
        this.model = model;
        this.color = color;
        this.year = year;
        this.steering = steering
    }

    // methods

    accelerate(){
        return `${this.name} is moving`;
    }
}

let Car1 = new Car("Toyota", "Venza", "Blue", "2026", "Square")

console.log(Car1);
console.log(Car1.accelerate());


let name = "Daniel";

let obj = {
    name: "Samuel",
    fav: [],
    func: function(){
        return `${this.name} is my name`
    }
}

console.log(obj.func());

let nums = [2,3,4,5,6,7,8,1,9]

console.log(Math.max(...nums));
