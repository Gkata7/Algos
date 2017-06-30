var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var testArray = [9,7,4];
swap(testArray, 2, 1);
console.log(testArray);

//
var indexOfMinimum = function (array, startIndex){
  var minValue = array[startIndex];
  var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++){
      if(array[i] < minIndex){
        minIndex = i;
        minValue = array[i];
      }
    }
    return minIndex;
  }

var array = [19,1,34,30,10,49];
var index = indexOfMinimum(array, 2);
console.log("the smallest number of the index is " + index);

var selectionSort = function(array){
  var minIndex = 0;
  var minValue = array[0];
    for(var i = 0; i < array.length; i++){
      (array, i , indexOfMinimum(array, i));
    }
};

var array = [23,4,5,10,200];
selectionSort(array);
