class Stack {
    constructor(){
        this.items = []
        this.lenght = 0
    }

    isEmpty(){
        if(this.lenght === 0) return
    }

    addStack(val){
        // console.log(items);
        
        this.items.push(val)
        this.lenght++;

        return this;
    }

    removeStack(){
        if(this.isEmpty()) return
        this.items.pop() // O1
        this.lenght--;
        return this;
    }


}

let plates = new Stack();
plates.addStack("Blue plate");
plates.addStack("Red plate");
plates.addStack("Green plate");

plates.removeStack();
console.log(plates);

console.log("Daniel".split(""));