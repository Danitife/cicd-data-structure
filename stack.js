class Stack {
    constructor() {
        this.items = [];
    }

    // methods
    push(el) {
        this.items.push(el);
    }
    
    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const arrange = new Stack();

arrange.push(10)
arrange.push(20)
arrange.push(30)
arrange.push(40)
arrange.push(50)

arrange.pop()
console.log(arrange);

// reverse a string with stack

function reverseStr(str){ // DataStructure. erud`
    let strArr = [];
    for(const ss of str) strArr.push(ss)
        let reversedStr = "";
        while(strArr.length > 0){
            reversedStr += strArr.pop();
        }
        console.log(reversedStr);
}


reverseStr("DataStructure")