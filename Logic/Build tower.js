function towerBuilder(nFloors) {
    // build here
    const cadenas = [];
    
    for (let i=1; i <= nFloors; i++) {
      let cadena = "";
      cadena = " ".repeat(2*i+1) + "*".repeat(nFloors-i-1) + " ".repeat(2*i+1);
      i++;
      cadenas.push(cadena)
    }
    return cadenas
  }

