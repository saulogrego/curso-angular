var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES6 ou ES 2015
var num = 2;
var PI = 3.14;
//Arrow Functions
var numeros = [1, 2, 3];
//Padrão
numeros.map(function (valor) {
    return valor * 2;
});
//ES6
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//Tipagem any para aceitar qualquer tipo - Javascript puro
var n1 = 'asdbsa';
n1 = 4;
//Variável com tipagem
var n2 = 'abarsdx';
