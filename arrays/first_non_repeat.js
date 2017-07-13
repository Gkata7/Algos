function firstNotRepeatingCharacter(string) {
  var a = string.charAt(i);
    for(var i = 0; i < string.length; i++){
        if(string.indexOf(a) == i && string.indexOf(a, i +1) == -1){
            return a;
        }
    }
    return "_";
}
