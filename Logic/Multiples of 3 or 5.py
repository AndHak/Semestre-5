def solution(number):
    if number < 0:
        return 0
        
    contador = 0
    suma = 0
    
    while contador < number:
        if contador % 3 == 0 or contador % 5 == 0:
            suma += contador
        contador += 1
            
    return suma