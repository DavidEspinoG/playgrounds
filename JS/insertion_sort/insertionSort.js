function insertionSort2(n, arr) {

  for(let i = 1; i < n; i++){
    let current = arr[i];
    let comparing = i - 1;
    debugger
    while(comparing >= 0 && current < arr[comparing]){
      arr[comparing + 1] = arr[comparing];
      comparing--;
    }
    arr[comparing + 1] = current
    console.log(arr.join(' '))
  }
  console.log(arr.join(' '))
}

let array = [1,4,3,5,6,2]
insertionSort2(array.length, array)