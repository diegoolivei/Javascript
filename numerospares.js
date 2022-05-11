function filtraPares(arr) {
    return arr.filter(funcaoFiltra);
}

function funcaoFiltra(item) {
    return item * 2 === 8;
}

const meusnumeros = [2, 4, 566, 122, 3, 7, 9];

console.log(filtraPares(meusnumeros));