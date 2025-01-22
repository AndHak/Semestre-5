def solution(s):
    cadenas = []
    cadena = ""
    for i in range(len(s)):
        cadena += s[i]
        if i % 2 == 1:
            cadenas.append(cadena)
            cadena = ""
    if cadena:
        cadena += "_"
        cadenas.append(cadena)
    return cadenas
            

print(solution("asdfadsf"))
print(solution("asdfads"))