

test('Esta prueba no debe de fallar', () => { 
    if (1 === 0){
        throw new Error('Error')
    }
 })

test('prueba de nombre', () => { 
    
    const name = 'Andres';
    const user = 'Andres G'
    expect(name).toBe(user) // se esperaba Andres G

 })