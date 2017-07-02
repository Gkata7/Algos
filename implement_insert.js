// var insert = function(array, rightIndex, value){
//   for(var j = rightIndex; j >= 0 && array[j] > value; j--){
//     array[j+1] = value;
//   }
//   array[j+1] = value;
// };

var insertionSOrt = function(array){
  for(var st = 1; st < array.length; st++){
    insert(array, st - 1, array[st]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
console.log("Array after sorting:  " + array);
console.log(array, [7, 9, 11, 22, 42, 88, 99]);
