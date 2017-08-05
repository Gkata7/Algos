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

function messyMath(num){
  var sum = 0;
  for(var i = 0; i <= num; i++){
    if((num/3) % i === 0){
      sum = -1;
      break;
    }else if(i % 3 === 0){
      continue;
    }else if(i % 7 === 0){
      sum += 2 * i;
    }else{
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

messyMath(10);

function barBlues(){
  var song = "";
  for(var i = 0; i <= 12; i++){
    song = "# " + i + " chick " + "boom " + "chick";
    console.log(song);
  }
  return song;
}

barBlues();

function fibonacci(num){
  if(num === 0){
    return 0;
  }else if(num === 1){
    return 1;
  }else{
    return fibonacci(num - 2) + fibonacci(num - 1);
  }
}
console.log(fibonacci(13));

function oneDigit(num){
  var sum = 0;
  var str = num.toString();
  if(str.length == 1){
    sum = parseInt(str,10);
    return sum;
  }else{
    for(var i = 0; i < str.length; i++){
      sum += parseInt(str.charAt(i), 10);
    }
    return oneDigit(sum);
  }
}
console.log(oneDigit(564));
