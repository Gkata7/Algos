// Insert a value into the beginning of the array.

function pushFront(arr,val){
  for(var i = arr.length; i > 0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = val;
  console.log(arr);
  return arr;
}

pushFront([1,2,3,23,34], 10);

// Remove and return a value at the beginning of the array. (No Built-in array methods except pop)

function popFront(arr){
  if(arr.length === 0){
    return 0;
  }
  for(var i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop(i);
  console.log(arr);
  return arr;
}

popFront([100,2,3,4]);

// Given array,index, val, insert the value into array at given index. Do this without using built in array methods.

function insert(arr,index,val){
  for(var i = arr.length; i > 0; i--){
    arr[i] = arr[i-1];
  }
    arr[index] = val;
  console.log(arr);
  return arr;
}

insert([1,2,3,54],(4),20)

// Given array and an index into array, remove and return array value at the index. Do this with no built in methods except pop().

function removeAt(arr,index){
  var temp = arr[index];
  for(var i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop(i);
  return temp;
  console.log(temp);
}

removeAt([1,2,3,4,5],3);
