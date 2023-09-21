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
  
  function processData(input) {
    let queue = new Queue();
    let data = input.split('\n').map(e => e.split(' '));
    for(let i = 1; i < data.length; i++){
      let operation = data[i][0]
      if(operation == '1') {
        queue.enqueue(data[i][1]);
      } else if (operation == '2'){
        queue.dequeue();
      } else if (operation == '3') {
        console.log(queue.read());
      } 
    }
  } 
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });
  
  process.stdin.on("end", function () {
     processData(_input);
  });
  