function hasher(str){
  let hash = {};
  for(let i = 0; i < str.length; i++){
    if(!hash[str[i]]){
      hash[str[i]] = 1
    } else {
      hash[str[i]] += 1;
    }
  }
  return hash;
}

function evaluateEach(substring, k){
  let substringHash = hasher(substring);
  let kHash = hasher(k);
  for(let [key, value] of Object.entries(kHash)) {
    if(!substringHash[key]) {
      return false;
    } else {
      kHash[key] -= substringHash[key];
    }
  }
  for(let [_, value] of Object.entries(kHash)) {
    if(value > 0){
      return false
    }
  }
  return true;
}

function findSmallest(hash){
  const values = Object.values(hash);
  const max = Math.min(...values);
  for(let [key, value] of Object.entries(hash)){
    if(max == value){
      return key;
    }
  }
}

function MinWindowSubstring(strArr) { 
  const [n, k] = strArr;
  let minSize = k.length;
  let leftPointer = 0;
  let plusSize = 0
  let rightPointer = minSize + plusSize;
  let possibleAnswers = {};
  while(true){ 
    debugger
    if( rightPointer > n.length) {
      break;
    }   
    let substring = n.substring(leftPointer, rightPointer);
    if(evaluateEach(substring, k)){
      possibleAnswers[substring] = substring.length;
      leftPointer++;
      rightPointer++;
      
    } else {
      if(rightPointer == n.length){
        leftPointer = 0;
        plusSize += 1;
        rightPointer = minSize + plusSize; 

      } else {
        leftPointer++;
        rightPointer++;
      }
    }
  }
  
  return findSmallest(possibleAnswers); 
}

console.log(MinWindowSubstring(["caae", "cae"]))
// console.log(evaluateEach("askfaje", "jefaa" ))