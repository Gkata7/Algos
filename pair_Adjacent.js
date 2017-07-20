function adjacentElementsProduct(inputArray) {
    var max = 0;
    var x = 0;
    for(var i = 0; i < inputArray.length - 1; i++){
        x = inputArray[i] * inputArray[i+1];
        if(x > max){
        max = x;
        }
    }
    return max;
}
