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

drawRightStars(75);


function drawCenteredStar(num){
  var stars = "";
  var counter = 0;
  for(var i = 0; i <= Math.floor((75-num)/2); i++){
    stars += "";
    if(i == Math.floor((75-num)/2)){
      while(counter < num){
        counter++;
        stars += "*";
      }
    }
  }
  console.log(stars);
  return stars;
}

drawCenteredStar(50);


function threeFives(){
  var sum = 0;
  for(var i = 100; i < 4000001; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

threeFives();

function coinChange(cents){
  var pennies = 0;
  var nickles = 0;
  var dimes = 0;
  var quarters = 0;
  var change = [];
  for(var i = 0; i < cents; i++){
    if(cents > 25){
      cents -= 25;
      quarters++;
    }else if(cents > 10){
      cents -= 10;
      dimes++;
    }else if(cents > 5){
      cents -= 5;
      nickles++;
    }else if(cents >= 1){
      cents -= 1;
      pennies++;
    }
  }
  change.push("quarters: " + quarters);
  change.push("dimes: " + dimes);
  change.push("nickles: " + nickles);
  change.push("pennies: " + pennies);
  console.log(change);
  return change;
}

coinChange(3);
