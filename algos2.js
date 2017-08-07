// Create a function that accepts a number as an input. Return a new Array that down by one, from the number down to 0.

function countdown(num){
var newArr = [];
  for(var i = num; i > 0; i--){
    newArr.push(i);
  }
  return arr.length;
}

// Create a function that receieves an array with two numbers. Print the first value and return the second.

function print(x,y){
  console.log(x);
  return[y]
}
print(1,2)

// Given an array, return the sum of the first value in the array, plus the array's length.What happens if the array's first
// value is not a number, but string or boolean?

function firstLength(arr){
  if(typeof arr[0] != 'number'){
    arr[0] = 0 + arr.length;
  }else{
    arr[0] = arr[0] + arr.length;
  }
  console.log(arr[0]);
  return arr;
}

firstLength([10,23,4,5]);

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greater(val){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Write a function that accepts any array, and returns a new array with the array values that are greater than it's 2nd value.
// Print how many values this is. What will you do if the array is only one element long?

function greaterThan(arr){
  var newArr = [];
  if(arr.length == 0){
    console.log("Array is Empty");
  }else if(arr.length == 1){
    console.log("There is only one element");
  }else{
    for(var i = 0; i < arr.length; i++){
      if(arr[1] < arr[i]){
      newArr.push(arr[i]);
      }
    }
  }
  console.log(newArr);
  return newArr;
}
greaterThan([3,1,2,66,10]);


// Given two numbers, return array of length num1 with value num2. Print "Jinx!" if they are same.
function length(num1,num2){
  var newArr = [];
  newArr.push(num1,num2);
  if(num1 == num2){
    console.log("Jinx");
  }
  console.log(newArr);
  return newArr;
}
length(20,20000000);

// Your function should accept an array. if value at [0] is greater than array's length, print "Too Big!"; if value[0] is less
// than array's length, print "Too Small!"; otherwise print "Just Right!"
function firstValue(arr){
  var newArr = [];
  if(arr[0] > arr.length){
    console.log("Too Big!");
  }else if(arr[0] < arr.length){
    console.log("Too Small!");
  }else{
    console.log("Just Right");
  }
  return newArr;
}

firstValue([2,2])

// Kelvin wants to convert between temperature scales. Create fahrenheit(num) that accepts a number of degrees in Fahrenheit,
// and returns the equivalent temperature as expressed in Celsius Degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheit(num){
  var fahrenheit = (9/5 * celsius) + 32;
  var celsius = 0;
  celsius = Math.floor((num - 32) * 5/9)
  console.log(celsius);
  return celsius;
}

fahrenheit(50);

// Given an array write a function that changes all positive numbers in the array to "big". Example: makeItBig([-1,3,5,-5]) 
// returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = arr [i];
    }else{
      arr[i] = "big!";
    }
  }
  console.log(arr);
  return newArr;
}

biggieSize([1,23,-44,-30]);

// Create a function that takes array of numbers. The function should print the lowest value in the array, and return
// the highest value in the array.
function lowHigh(arr){
  var low = arr[0];
  var high = arr[0];
  if(arr.length == 0){
    console.log("It's Empty");
  }else if(arr.length == 1){
    low = arr[i];
    high = arr[i];
  }else{
    for(var i = 0; i < arr.length; i++){
      if(arr[i] high){
        high = arr[i];
      }
    }
  }
  console.log(low);
  return(high);
}

lowHigh([]);

// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return
// first odd value in the array.
function oneAnother(arr){
  var odd = arr[0];
  if(arr.length == 0){
    console.log("The Array is Empty");
  }else if(arr.length == 1){
    console.log("There is only one element");
  }else{
      for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
        odd = arr[i];
        break;
      }
    }
  }
  console.log(arr[arr.length -1]);
  return odd;
}

oneAnother([1,2,3,4,5]);

// Given array, create a function to return a new array where each value in the original has been doubled. Calling 
// double([1,2,3]) should return ([2,4,6]) without changing original.
function doubleVision(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
  return newArr;
}

doubleVision([1,2,3]);

// Given array of numbers, create function to replace last value with number of positive values. Example,
// countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function positives(arr){
  var positive = 6;
  var index = arr[0];
  for(var i = 0 ; i < arr.length; i++){
    index = i
  }
    arr[index] = positive;
  console.log(arr);
  return arr;
}

positives([-1,2,3,4,5]);

// Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!" Every
// time the array has three evens in a row, print "Even More So!"
function evenOdd(arr){
  var odd = 0;
  var even = 0;
  for(var i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 == 1){
      odd++;
    if(odd % arr[i]){
      console.log("That's Odd!");
      }
    }else{
      console.log("Even So!");
    }
  }
}

evenOdd([1,1,1,2,3,4,4,4]);

// You are passed an array containing strings. Working within that same array, replace each string with a number- the length
// of the string at previous array index and return the array.
function lengths(arr){
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string'){
      arr[i] = arr[i].length;
      console.log("string");
    }else{
      console.log("no string");
    }
  }
  console.log(arr);
  return arr;
}

lengths(["hi", 1,3,45,"money"])

// Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd(arr[1],arr[3],arr[5]) etc.
// Afterward, console.log each array value and return arr.
function seconds(arr){
  for(var i = 0; i < arr.length; i++){
    if(i % 2 == 1){
      arr[i] += 1;
    }
  }
  console.log(arr);
  return arr;
}

seconds([1,3,5,4,5,6]);

// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSeven(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[1] == 'number'){
      arr[i] ++;
      newArr.push(arr[i] + 7);
    }
  }
  console.log(newArr);
  return arr;
}

addSeven([1,2,3,4,5]);

// Given array, write a function that reverses values in place. Example: ([3,1,6,4,2]) returns the same array,
// containing [2,4,6,1,3]
function reverseArray(arr){
  for(var i = 0; i < arr.length / 2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
  return arr;
}

reverseArray([2,5,1,10,22]);

// Given an array, create and return a new one containing all the values of the provided array, made negative.
// Given [1,-3, 5] return [-1,-3,-5]
function negative(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
      newArr.push(arr[i] * -1);
  }else {
      newArr.push(arr[i]);
  }
    console.log(newArr);
    return arr;
  }

negative([1,20,-4,-5,6]);

// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array
// elements are "food", then print "I'm Hungry" once.
function hungry(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 'food'){
      console.log('yummy');
    }else{
      console.log('Im hungry');
    }
  }
  console.log(arr);
  return arr;
}

hungry(['food',2,3,'bball']);

// Given array, swap first and last, third and third-to-last,etc. Input[true,42,"ada",2,"pizza"] becomes ["pizza",42,"ada",2,true].
// Change [1,2,3,4,5,6] to [6,5,4,3,2,1]
function swapCenter(arr){
  for(var i = 0; i < Math.floor(arr.length/2); i++){
    if(i % 2 == 0){
      temp = arr[i];
      arr[i] = arr[arr.length - 1 -i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  console.log(arr);
  return arr;
}

swapCenter([1,2,3,4,5,6]);

// Given an array arr and number num, multiply all values in arr by num and return the changed array arr.
function scaleArray(arr,num){
  for(var i = 0; i < arr.length; i++){
    arr[i] *= num;
  }
  console.log(arr);
  return arr;
}

scaleArray([1,2,3,4,5],2);

// Stan learned somethin today: That reducing an array's.length immediately shortens it by that amount. Given array arr and 
// number X, remove all except the last X elements, and return arr. Given ([2,4,6,8,10],3) change the given array to [6,8,10] and return it.
function keepFew(arr,num){
  for(var i = 0; i < num; i++){
    arr.shift();
  }
  console.log(arr);
  return arr;
}

keepFew([2,4,6,8,10],2);

// Cartman doesnt really like math class and needs help. You are given two numbers - the coefficients M and B in the equation
// Y = MX + B. Build a function that returns X-intercept.
function mathHelp(m,b){
  var coefficients = [];
  coefficients.push(0);
  console.log(coefficients);
  return coefficients
}

mathHelp(2,-4);
y = MX + B
-In this case b = 2 and m = -4
y = (-4)(0) + 2
y = (0,2)

// Kenny tries to be safe, but somehow everyday something happens. If there is a 10% chance of volcano, 15% chance of Tsunami,
// 20% chance of earthquake, 25% chance of blizzard, and 30% chance of meteor strike, write a function whatHappensToday() to print the outcome.
function whatHappensToday(probability){
  if(probability < 0.11){
    console.log("Volcano Eruption");
  }else if(probability < 0.26){
    console.log("Tsunami Storm!");
  }else if(probability < 0.46){
    console.log("Eartquake Time!");
  }else if(probability < 0.71){
    console.log("Blizzard Time!");
  }else{
    console.log("Meteor Strike");
  }
}

whatHappensToday(0.72);


function whatReallyHappensToday(day){
  var disaster = ["Volcanic Eruption", "Tsunami Storm", "Earthquake Time", "Blizzard Time","Meteor Strike"];
  var probability = 0;
  var counter = 0;
  var disasterCount = 0;
  while(day != 0){
    day--;
    counter++;
    console.log("Day Counter");
    for(var i = 0; i < disaster.length - 1; i++){
      if(i == 1){
        probability = Math.random().toFixed(2);
        console.log("Rolling Probability +".Iteration + i);
      if(probability <= 0.10){
          console.log(disaster[0]);
          disasterCount++;
        }
      } else if(i == 2){
          probability = Math.random().toFixed(2);
          console.log("Rolling Probability +".Iteration + i);
        if(probability <= 0.15){
          console.log(disaster[1]);
          disasterCount++;
        }
      } else if(i == 3){
          probability = Math.random().toFixed(2);
          console.log("Rolling Probability +".Iteration + i);
        if(probability <= 0.20){
          console.log(disaster[2]);
          disasterCount++;
        }
      } else if(i == 4){
          probability = Math.random().toFixed(2);
          console.log("Rolling Probability +".Iteration + i);
        if(probability <= 0.25){
          console.log(disaster[3]);
          disasterCount++;
        }
      } else{
          probability = Math.random().toFixed(2);
          console.log("Rolling Probability +".Iteration + i);
        if(probability <= 0.30){
          console.log(disaster[4]);
          disasterCount++;
        }
      }
      if(disasterCount == 0){
        console.log("We're Doom!!!..maybe");
      }
    }
  }
  return day;
}

whatReallyHappensToday(0.20);


// Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100. Those getting
// 90+ get an 'A', 80-89 earn 'B', 70-79 earn 'C', 60-69 earn 'D', 59 or lower receieve an 'F'.
// example: ("Score: 73 Grade: C")
function letterGrade(score){
    if(score >= 90){
      console.log("Score: " + score + " Grade: A" );
    }else if(score >= 80){
      console.log("Score: " + score + " Grade: B");
    }else if(score >= 70){
      console.log("Score: " + score + " Grade: C");
    }else if(score >= 60){
      console.log("Score: " + score + " Grade: D");
    }else{
      console.log("Score: " + score + " Grade: F");
    }
    return score;
}

letterGrade(50);

function accurateGrades(score){
  if(score % 10 == 1 && score % 10 == 2){
    console.log("-");
  }
  if(score % 10 == 8 && score % 10 == 9){
    console.log("+");
  }
    if(score >= 90){
      console.log("Score: " + score + " Grade: A");
    }else if(score >= 80){
      console.log("Score: " + score + " Grade: B");
    }else if(score >= 70){
      console.log("Score: " + score + " Grade: C");
    }else if(score >= 60){
      console.log("Score: " + score + " Grade: D");
    }else{
      console.log("Score: " + score + " Grade: F");
    }
    return score;
}

accurateGrades(89);
