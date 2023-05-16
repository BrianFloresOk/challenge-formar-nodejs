/* 
Escriba la función fizz_buzz() que devuelve un array de 1 a N, pero:
Para múltiplos de 3, imprime “Fizz”
Para múltiplos de 5, imprime “Buzz”
Para múltiplos de 3 y 5 impresiones “FizzBuzz”
La función toma un número entero N como parámetro y devuelve la secuencia como un array hasta el índice N. 

Ejemplos:

Input: 2
Output: [1,2]

Input: 5
Output: [1,2,"Fizz",4,"Buzz"]

Input: 9
Output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"]

Input: 15
Output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]

*/

let numero = process.argv[2];
function fizzBuzz(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz")
        } else if (i % 3 === 0) {
            array.push("Fizz")
        } else if (i % 5 === 0) {
            array.push("Buzz")
        } else {
            array.push(i);
        }
    }
    console.log(array)
}

fizzBuzz(numero)