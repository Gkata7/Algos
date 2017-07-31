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

function lowHigh(arr){
  var low = arr[0];
  var high = arr[0];
  if(arr.length == 0){
    console.log("It's Empty");
  }else if(arr.length == 1){
    low = arr[i];
    high = arr[i];
  }else{
    for(var i = 0; i < arr.length; i++){
      if(arr[i] high){
        high = arr[i];
      }
    }
  }
  console.log(low);
  return(high);
}

lowHigh([]);

function oneAnother(arr){
  var odd = arr[0];
  if(arr.length == 0){
    console.log("The Array is Empty");
  }else if(arr.length == 1){
    console.log("There is only one element");
  }else{
      for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
        odd = arr[i];
        break;
      }
    }
  }
  console.log(arr[arr.length -1]);
  return odd;
}

oneAnother([1,2,3,4,5]);

function doubleVision(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
  return newArr;
}

doubleVision([1,2,3]);

function positives(arr){
  var positive = 6;
  var index = arr[0];
  for(var i = 0 ; i < arr.length; i++){
    index = i
  }
    arr[index] = positive;
  console.log(arr);
  return arr;
}

positives([-1,2,3,4,5]);

function evenOdd(arr){
  var odd = 0;
  var even = 0;
  for(var i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 == 1){
      odd++;
    if(odd % arr[i]){
      console.log("That's Odd!");
      }
    }else{
      console.log("Even So!");
    }
  }
}

evenOdd([1,1,1,2,3,4,4,4]);


function lengths(arr){
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string'){
      arr[i] = arr[i].length;
      console.log("string");
    }else{
      console.log("no string");
    }
  }
  console.log(arr);
  return arr;
}

lengths(["hi", 1,3,45,"money"])

function seconds(arr){
  for(var i = 0; i < arr.length; i++){
    if(i % 2 == 1){
      arr[i] += 1;
    }
  }
  console.log(arr);
  return arr;
}

seconds([1,3,5,4,5,6]);

function lengths(arr){
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string'){
      arr[i] = arr[i].length;
      console.log("string");
    }else{
      console.log("no string");
    }
  }
  console.log(arr);
  return arr;
}

lengths(["hi", 1,3,45,"money", "coding"])

function addSeven(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[1] == 'number'){
      arr[i] ++;
      newArr.push(arr[i] + 7);
    }
  }
  console.log(newArr);
  return arr;
}

addSeven([1,2,3,4,5]);

function reverseArray(arr){
  for(var i = 0; i < arr.length / 2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
  return arr;
}

reverseArray([2,5,1,10,22]);

function negative(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
      newArr.push(arr[i] * -1);
  }else {
      newArr.push(arr[i]);
  }
    console.log(newArr);
    return arr;
  }

negative([1,20,-4,-5,6]);

function hungry(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 'food'){
      console.log('yummy');
    }else{
      console.log('Im hungry');
    }
  }
  console.log(arr);
  return arr;
}

hungry(['food',2,3,'bball']);

function swapCenter(arr){
  for(var i = 0; i < Math.floor(arr.length/2); i++){
    if(i % 2 == 0){
      temp = arr[i];
      arr[i] = arr[arr.length - 1 -i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  console.log(arr);
  return arr;
}

swapCenter([1,2,3,4,5,6]);

function scaleArray(arr,num){
  for(var i = 0; i < arr.length; i++){
    arr[i] *= num;
  }
  console.log(arr);
  return arr;
}

scaleArray([1,2,3,4,5],2);
