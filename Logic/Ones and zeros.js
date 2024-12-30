const binaryArrayToNumber = arr => {
    arr = arr.reverse()
    let suma = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] === 1){
            suma += 2**i;
        }
    }
    return suma;
  };

  console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
  console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
  console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
  console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6