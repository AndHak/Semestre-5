function XO(str) {
    let o = 0;
    let x = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] === 'o' || str[i] === 'O') {
            o++
        }
        if (str[i] === 'x' || str[i] === 'X') {
            x++
        }
    }
    return x == o;
}