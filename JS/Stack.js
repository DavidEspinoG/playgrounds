class Stack {
  constructor(){
    this.data = [];
  }
  dequeue() {
    return this.data.pop();
  }
  enqueue(item) {
    this.data.push(item);
  }
  read(){
    let last = this.data.length - 1; 
    return this.data[last];
  }
  isEmpty(){
    return this.data.length == 0;
  }
}

class Queue {
  constructor(){
    this.input = new Stack();
    this.output = new Stack();
  }
  enqueue(item){
    this.input.enqueue(item);
  }
  dequeue(){
    if(this.output.isEmpty()){
      while(!this.input.isEmpty()){
        this.output.enqueue(this.input.dequeue());
      }
    }
    return this.output.dequeue();
  }
  read(){
    if(this.output.isEmpty()){
      while(!this.input.isEmpty()){
        this.output.enqueue(this.input.dequeue());
      }
    }
    return this.output.read();
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue.read());