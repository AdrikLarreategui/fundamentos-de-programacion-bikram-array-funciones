let arrayVacio = []; //Arrays 1//
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Arrays 2//
let arrayBidimensional = [[0, 1, 2],['a','b','c']]; //Arrays 4//
const arrayNumerosPares = [];
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    arrayNumerosPares.push(i);
  }
}
console.log(arrayNumerosPares); //Arrays 3

function suma(num1 , num2) {
    return num1 + num2
    } 
    const resultado = suma(38, 10); // Funciones 5

    function potenciacion(a, b) {
        if (b === 0) {
          return 1; 
        }
        let resultado = 1;
        for (let i = 1; i <= Math.abs(b); i++) {
          if (b > 0) {
            resultado *= a;
          } else {
            resultado /= a;
          }
        }
      
        return resultado;
      } //Funciones 6

function separarPalabras(texto) {
    return texto.split(' ');
} //Funciones 7

function repertirString(string, numero)


