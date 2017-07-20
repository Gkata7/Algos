// function countdown(num){
// var newArr = [];
//   for(var i = num; i > 0; i--){
//     newArr.push(i);
//   }
//   return arr.length;
// }


// function greater(val){
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] > arr[i]){
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
//
//
// function print(x,y){
//   console.log(x);
//   print[x,y]
// }

function firstLength(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    if(arr != '0123456789'){
      return false;
    }
  }
  return sum;
}
