function sigma(num){
  var sum = 0;
  for(var i = 0; i <= num; i++){
    sum += i;
  }
  console.log(sum);
  return sum;
}

sigma(5);
sigma(3);

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


function drawLeftStars(num){
  var string = '';
  for(var i = 0; i < num; i++){
    string += "*";
  }
  console.log(string);
  return string;
}

drawLeftStars(30);

function drawRightStars(num){
  var stars = "";
  var counter = 0;
  if(num > 75 || num < 0){
    console.log("Not a valid number");
  }else{
    for(var i = 0; i <= 75 - num; i++){
      stars += "";
      if(i == 75 - num){
        while(counter <= num){
          stars += "*";
          counter++;
        }
      }
    }
  }
  console.log(stars);
  return stars;
}

drawLeftStars(75);
