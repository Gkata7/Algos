// function sigma(num){
//   var sum = 0;
//   for(var i = 0; i <= num; i++){
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
//
// sigma(5);
// sigma(3);

function factorial(num){
  var sum = 1;
  for(var i = 1; i <= num; i++){
    sum *= i;
  }
  console.log(sum);
  return sum;
}

factorial(3);
factorial(5);
factorial(6);
