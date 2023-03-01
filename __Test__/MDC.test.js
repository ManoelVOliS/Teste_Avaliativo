const MDC = require('../Scripts/maiorMultiploComum.js');

test('Teste Exemplo', () => {    
    expect(
        MDC(15, 18, 9)
        ).toEqual(3);
});

test('Teste Aleatorio 1', () => {
    expect(
        MDC(26, 20, 12)
        ).toEqual(2);
});

test('Teste Aleatorio 2', () => {
    expect(
        MDC(17, 13, 7)
        ).toEqual(1);
});