const indiceImpar = require('../Scripts/indiceImpar.js');

test('Teste Exemplo', () => {
    let vetor1 = [1,2,3,4,5];
    let vetor2 = [6,7,8,9,10];
    expect(indiceImpar(vetor1,vetor2)).toEqual([6,2,8,4,10]);
});

test('Teste Aleatorio 1', () => {
    let vetor1 = [1,2,3,4];
    let vetor2 = [4,5,6,7];
    expect(indiceImpar(vetor1,vetor2)).toEqual([4,2,6,4]);
});

test('Teste Aleatorio 2', () => {
    let vetor1 = ['a', 'b', 'c'];
    let vetor2 = ['x', 'y', 'z'];
    expect(indiceImpar(vetor1,vetor2)).toEqual(['x', 'b', 'z']);
});