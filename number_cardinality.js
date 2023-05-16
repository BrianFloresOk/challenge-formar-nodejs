/* 
Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:
Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.

Ejemplos:

Input: 100
Output: zero

Input: 88
Output: even

Input: 155
Output: five

Input: 99
Output: odd

*/

let numero = process.argv[2];
const test = {
    isZero: function(num) {
        num = String(num).slice(String(num).length - 1)
        return num === "0" ? {status: true, name: "zero"} : false;
        
    },
    isFive: function(num) {
        num = String(num).slice(String(num).length - 1)
        return num === "5" ? {status: true, name: "five"} : false;
    },
    isEven: function(num) {
        if(num % 2 === 0 && !this.isZero()) {
            return {
                status: true,
                name: "even"
            }
        } else { return false }
    },
    isOdd: function(num) {
        if(num % 2 !== 0 && !this.isFive()) {
            return {
                status: true,
                name: "odd"
            }
        } else { return false }
    }
}

function print({name}) {
    const response = ["zero", "five", "even", "odd"];
    for(let res of response) {
        if(res === name) {
            console.log(res)
        }
    }
}

function number_cardinality(num) {

    let zero = test.isZero(num);
    let five = test.isFive(num);
    let even = test.isEven(num);
    let odd = test.isOdd(num);

    print(zero || five || even || odd);
}

number_cardinality(numero);