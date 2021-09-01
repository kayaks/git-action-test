const getAge = require('./getAge');

test('Check return value of getName', () => {
    expect(getAge()).toBeGreaterThanOrEqual(100);
});