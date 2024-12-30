function getCount(str) {
    let vowels = 0;
    for (i = 0; i <= str.length; i++){
      if ('aeiou'.includes(str[i])){
        vowels++
      }
    }
    return vowels;
  }

console.log(getCount('abracadabra'))