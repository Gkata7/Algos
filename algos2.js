function countdown(num){
var newArr = [];
  for(var i = num; i > 0; i--){
    newArr.push(i);
  }
  return arr.length;
}

function print(x,y){
  console.log(x);
  return[y]
}
print(1,2)

function firstLength(arr){
  if(typeof arr[0] != 'number'){
    arr[0] = 0 + arr.length;
  }else{
    arr[0] = arr[0] + arr.length;
  }
  console.log(arr[0]);
  return arr;
}

firstLength([10,23,4,5]);

function greater(val){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}



function greaterThan(arr){
  var newArr = [];
  if(arr.length == 0){
    console.log("Array is Empty");
  }else if(arr.length == 1){
    console.log("There is only one element");
  }else{
    for(var i = 0; i < arr.length; i++){
      if(arr[1] < arr[i]){
      newArr.push(arr[i]);
      }
    }
  }
  console.log(newArr);
  return newArr;
}
greaterThan([3,1,2,66,10]);


function length(num1,num2){
  var newArr = [];
  newArr.push(num1,num2);
  if(num1 == num2){
    console.log("Jinx");
  }
  console.log(newArr);
  return newArr;
}
length(20,20000000);


function firstValue(arr){
  var newArr = [];
  if(arr[0] > arr.length){
    console.log("Too Big!");
  }else if(arr[0] < arr.length){
    console.log("Too Small!");
  }else{
    console.log("Just Right");
  }
  return newArr;
}

firstValue([2,2])

function fahrenheit(num){
  var fahrenheit = (9/5 * celsius) + 32;
  var celsius = 0;
  celsius = Math.floor((num - 32) * 5/9)
  console.log(celsius);
  return celsius;
}

fahrenheit(50);


function biggieSize(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = arr [i];
    }else{
      arr[i] = "big!";
    }
  }
  console.log(arr);
  return newArr;
}

biggieSize([1,23,-44,-30]);
