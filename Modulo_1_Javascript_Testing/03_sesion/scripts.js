function multiplicador(factor) {
    return function (numero) {
        return numero * factor;
    };
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);
const cuadraplicar = multiplicador(4);

console.log(duplicar(5));
console.log(triplicar(8));
console.log(cuadraplicar(4)); 