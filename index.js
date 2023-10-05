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

function pintarArray(arr) {
  const arrayString = arr.toString(); // Convierte el array a una cadena usando toString()
  return `Array: [${arr}] String: '${arrayString}'`;
} //Mezclando Arrays y Funciones 12

function arrayMapi(arr, funcion) {
  return arr.map(function(elemento, indice) {
    return funcion(elemento, indice);
  }); //Mezclando Arrays y Funciones 13
}

function eliminarDuplicados(arr) {
  return arr.filter(function(elemento, indice) {
    return arr.indexOf(elemento) === indice;
  });
} //Mezclando Arrays y Funciones 14

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9] //Arrays 15
let holaMundo = ['Hola', 'Mundo'] //Arrays 16
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']] //Arrays 18
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'] //Arrays 17
