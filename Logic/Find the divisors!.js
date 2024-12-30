function divisors(integer) {
    let divisors = [];
    for (contador = 2; contador < integer; contador++) {
      if (integer % contador === 0) {
        divisors.push(contador)
      }
    }
    if (divisors.length >= 1){
      return divisors;
    } else {
      return `${integer} is prime`;
    }
  }

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));