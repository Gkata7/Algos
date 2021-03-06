// Finding only odd numbers from an array between 1 and 255
function oddArrays(){
  var oddArray =[];
  for(var i = 1; i <= 255; i++){
    if(i % 2 !== 0){
      return oddArray;
    }
  }
}

function maxMinAvg(arr){
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];

    for(var i = 1; i < arr.length; i++){
      if(max < arr[i]){
        max = arr[i];
      }
      if(min > arr[i]){
        min = arr[i];
    }
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  var arrNew = [max, min, avg];
  return arrNew;
}


function maxNumber(arr){
    var max = arr[0];
    for(var i = 1; i< arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

function range(){
    var arr = [];
    for(var i = 0; i < 256; i++){
        arr.push(i);
    }
    return arr;
}

function even(arr){
    var sum = 0;
    for(var i = 1; i < 1001; i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}

function sum_odd(arr){
   var sum = 0;
   for(var i = 4; i < 412; i++){
       if(i % 2 !== 0){
           sum += i;
       }
   }
   return sum;
}

function sum_odd(arr){
   var sum = 0;
   for(var i = 4; i < 412; i++){
       if(i % 2 !== 0){
           sum += i;
       }
   }
   return sum;
}

function avg(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum = sum + arr[i];
    }
    var avgNum = sum /arr.length;
    return avgNum;
}

function greater(arr,Y){
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
        }
    }
    return count;
}

function negative(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}



Rank these functions according to their growth, from slowest growing to fastest growing.
64
log8n
log2n
4n
n log6n
n log2n
6n3
8n2
82n

Order:
-Constant Functions:
  64
-Logarithmic Functions:
  log8n, log2n
-Linear Functions:
  4n
-Linearithmic Functions:
  n log2n, n log4n
-Polynomial Functions:
  8n2 8n3
-Exponential Functions:
  82n
