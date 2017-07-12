function firstDuplicate(a){
  var numArray = {};
  for(var i = 0; i < a.length; i++){
    if(numArray[a[i]]){
      return a[i];
    }
    numArray[a[i]] = true;
  }
  return - 1;
}

console.log(firstDuplicate([1,2,3,2,4,4,5,]));
