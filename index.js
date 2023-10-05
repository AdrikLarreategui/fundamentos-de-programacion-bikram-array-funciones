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

function separarPalabras(str) {
  const palabrasArray = str.split(' ');
  return palabrasArray;
} //Funciones 7
  
function repetirString(str, veces) {
  if (veces < 1) {
    return '';
}
  let resultado = '';
    for (let i = 0; i < veces; i++) {
      resultado += str;
      }
return resultado; 
} //Funciones 8

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
} //Funciones 9

function ordenarArray(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}//Mezclando Arrays y Funciones 10

function obtenerPares(arra) {
  return arra.filter(function(numero){
    return numero %2 === 0
  });
}//Mezclando Arrays y Funciones 11




