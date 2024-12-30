function solution(str){
  const lista = []
  let cadena = ''
  for (i = 0; i < str.length; i++) {
    cadena += str[i];
    if (i % 2 === 1) {
        lista.push(cadena);
        cadena = '';
    }
  }
  if (cadena) {
    cadena += "_"
    lista.push(cadena)
    }
  return lista
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]