class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// see this like an array, but not neccesarily an array;
class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // methods
    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
    }

    pop(){
        if(!this.head) return;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }
    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
    }
}

let myList = new SingleLinkedList();

myList.push("Hey");
myList.push("Hi");
console.log(myList);

// LinkedList Exp || Ref
// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// where 1 is the head and 6 is the tail
// if 1 is the only node, then head and tail will be the same node