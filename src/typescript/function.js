// 函数表达式
let mySum = function (x, y) {
    return x + y;
};
// 使用 => 表达式
let mySum1 = function (x, y) {
    return x + y;
};
let mySearch;
mySearch = function (source, substring) {
    return source.search(substring) !== -1;
};
// 可选参数
let sum = function Sum(x, y, z) {
    return x + y + z;
};
// 默认参数
let sum1 = function Sum(x, z = 20, y) {
    return x + y + z;
};
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
