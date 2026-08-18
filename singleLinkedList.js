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
    get(index){ // 4
        if(index < 0 || index >= this.length) return;
        let current = this.head;
        let i = 0;
        while(i < index){
            current = current.next;
            i++;
        }
        return current;
    }

    insertAt(idx, data){
        if(idx < 0 || idx > this.length) return;
        if(idx === this.length) return this.push(data);
        if(idx === 0) return this.unshift(data);
        let newNode = new Node(data);
        let prev = this.get(idx - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length ++;
    }

    removeAt(idx){
        if(idx < 0 || idx >= this.length) return;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        let prev = this.get(idx - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length --;
        return removed;
    }

    toArray(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}

let myList = new SingleLinkedList();

myList.push("Hey");
myList.push("Hi");
console.log(myList);

console.log(myList.get(2));

// LinkedList Exp || Ref
// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// A -> B -> C -> D -> E -> F -> G -> null
// where 1 is the head and 6 is the tail
// if 1 is the only node, then head and tail will be the same node


let ageList1 = new SingleLinkedList();
ageList1.push(10);
ageList1.push(20);
ageList1.push(10);
ageList1.push(20);
ageList1.push(30);
ageList1.push(40);
ageList1.push(40);
ageList1.push(50);
ageList1.push(50);

let ageList2 = new SingleLinkedList();
ageList2.push(10);
ageList2.push(12);
ageList2.push(20);
ageList2.push(35);
ageList2.push(50);
// 10 -> 12 -> 20 -> 35 -> 40 -> 50
function mergeSortedLists(l1, l2) { // Correct this code....
    let dummy = new Node(null);
    let current = dummy;
// null -> 10
    let a = l1;
    let b = l2;

    while(a && b){
        if(a.data < b.data){
            current.next = a;
            a = a.next;
        }else{
            current.next = b;
            b = b.next;
        }
        current = current.next;
    }
    current.next = a || b;
    return dummy.next;
}

console.log(mergeSortedLists(ageList1, ageList2));

function removeDuplicates(list){
    let current = list.head;
    while(current && current.next){
        if(current.data === current.next.data){
            current.next = current.next.next;
            list.length --;
            current = current.next;
        }else{
            current = current.next;
        }
    }
    return list;
}

let cleanedList = removeDuplicates(ageList1);

console.log("Cleaned List:", cleanedList.toArray());