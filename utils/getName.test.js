const getName = require('./getName');


test('Check return value of getName', () => {
    expect(getName()).toBe('Nikita');
});