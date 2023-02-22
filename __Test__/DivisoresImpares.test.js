const divisoresImpares = require('../Scripts/divisoresImpares');

test('Teste Exemplo', () => {    
    expect(
        divisoresImpares(12)
        ).toEqual(2);
});

test('Teste Aleatorio 1', () => {
    expect(
        divisoresImpares(15)
        ).toEqual(3);
});

test('Teste Aleatorio 2', () => {
    expect(
        divisoresImpares(127)
        ).toEqual(1);
});