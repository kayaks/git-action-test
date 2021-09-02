const hasParams = require('./hasParams');

test('Query with one parameter' , () => {
    expect(hasParams('/user/?a=1')).toBeTruthy();
});

test('Query with two parameters' , () => {
    expect(hasParams('/user/?a=1&b=2')).toBeTruthy();
});

test('Query with long path in url' , () => {
    expect(hasParams('/api/admin/user/kay/?a=1&b=2')).toBeTruthy();
});

test('Query without last slash' , () => {
    expect(hasParams('/user?a=1&b=2')).toBeTruthy();
});

test('Query with specific path' , () => {
    expect(hasParams('/user?a=1&b=2', '/user')).toBeTruthy();
});

test('Query with a specific path and with a trailing slash' , () => {
    expect(hasParams('/user/?a=1&b=2', '/user/')).toBeTruthy();
});

test('Query with specific long path' , () => {
    expect(hasParams('/api/admin/user/kay?a=1&b=2', '/api/admin/user/kay')).toBeTruthy();
});

test('Incorrect path in url' , () => {
    expect(hasParams('user/?a=1&b=2')).toBeFalsy();
});

test('Incorrect query parameter' , () => {
    expect(hasParams('user/?a=')).toBeFalsy();
});