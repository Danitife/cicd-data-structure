class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // methods
    push(data) {
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return;
        let removedNode = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }
}