// prueba unitaria

const saludar = require('./index');

test('debe retornar "Hola Mundo"', () => {
    expect(saludar()).toBe('Hola Mundo');
});
