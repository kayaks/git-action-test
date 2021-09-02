module.exports = function hasParams(url, withPath = ''){
    let pathPart = withPath ? withPath : '((?:/\\w+/?)+)';
    let regExp = new RegExp(`${pathPart}\\?((?:\\w+=\\w+&?)+)`, 'g');
    return !!url.match(regExp);
}