const sum = require('./sum')

test('Agrega bien los 2 numeros', () => {
    expect(sum(1,2)).toBe(3)
})