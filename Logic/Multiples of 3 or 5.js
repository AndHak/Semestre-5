function solution(number){
    if (number < 0) return 0
    let suma = 0;
    for (i=0; i<number; i++) {
        if (i % 3 == 0) {
            suma += i
        } else if (i % 5 == 0) {
            suma += i
        }
    }
    return suma
}