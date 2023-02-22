const mediaHarmonica = require('../Scripts/mediaHarmonica');

test('Teste Exemplo', () => {    
    expect(
        mediaHarmonica(5, 8, 6)
        ).toEqual(true);
});

test('Teste Aleatorio 1', () => {
    expect(
        mediaHarmonica(7, 7, 6)
        ).toEqual(true);
});

test('Teste Aleatorio 2', () => {
    expect(
        mediaHarmonica(2, 4, 6)
        ).toEqual(false);
});