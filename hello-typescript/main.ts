var minhaVar = 'minha variavel';

function minhaFunc(x, y){
    return x + y;
}

//ES6 ou ES 2015
let num = 2;
const PI = 3.14;

//Arrow Functions
var numeros = [1,2,3]
    //Padrão
    numeros.map(function(valor) {
        return valor * 2;
    });
    //ES6
    numeros.map((valor) => valor * 2);

class Matematica{
    soma(x, y){
        return x + y;
    }
}

//Tipagem any para aceitar qualquer tipo - Javascript puro
var n1: any = 'asdbsa';
n1 = 4;

//Variável com tipagem
var n2: string = 'abarsdx';