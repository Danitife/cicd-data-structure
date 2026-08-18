class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularQueue {
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }


    isFull(){
        // if(this.front == 0 && this.rear == this.size - 1){
        //     return "Queue is full";
        // }

        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is FULL ❌");
            return;
        }

        // s5 => 1->2->3->4->5
        // 5+1 % 5 = 1
        // front = -1

    }
    enqueue(data){
        if(this.isFull()) return "Queue is full ❌";
        if(this.rear === -1 && this.front === -1){
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = data;
        }else{
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = data;
        }

    }
}

const queue = new CircularQueue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue);

console.log(0%5);