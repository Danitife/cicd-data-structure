class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    // append adds at the end of the list
    append(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // prepend adds to the front of the list
    prepend(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // get(idx) returns a particular item at the idx 0(n)
    get(idx){
        if(idx > this.length - 1 || idx < 0) return;

        let curr = this.head;
        for(let i = 0; i < idx; i++){
            curr = curr.next
        }
        return curr;
    }

    insertAt(idx, value){
        if(idx > this.length - 1 || idx < 0) return;
        if(idx === 0) return this.prepend(value)
        if(idx === this.length - 1) return this.append(value)

        let prev = this.get(idx - 1)
        let newNode = new Node(value)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return this
    }
}

let myList = new SinglyLinkedList()
myList.append("Workout")
myList.append("Working")
myList.prepend("Front")
myList.prepend("Front1")

// console.log(myList)

console.log(myList.get(0))