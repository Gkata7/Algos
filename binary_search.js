var doSearch = function(array, targetValue) {
		var min = 0;
		var max = array.length - 1;
		var guess;
		var countGuess = 0;
		  while(max >= min){
		    guess = Math.floor((max + min)/ 2);
				countGuess++;
				console.log(guess);
		  if(array[guess] === targetValue){
				console.log(countGuess);
		   return guess;
		  }
		  else if(array[guess] < targetValue){
		    min = guess + 1;
		     }
	    else{
	     max = guess - 1;
	       }
	    }
		return - 1;
	};

	var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
			41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

	for(var i = 0; i <primes.length; i++){
		var result = doSearch(primes, primes[i]);
		console.log("found prime at index " + result);
	}
