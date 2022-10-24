// 函数
function createArray1(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
// 多个泛型的函数
function swap(temp) {
    return [temp[1], temp[0]];
}
function loggingProp(arg) {
    console.log(arg.length);
    return arg;
}
loggingProp({ length: 1 });
// 多个泛型互相约束
function copyFields(target, source) {
    for (let id in source) {
        // 显示类型转换，source 类型转换为 T 类型
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
let createArray;
createArray = function (length, val) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = val;
    }
    return result;
};
// 按照格式。需定义泛型类型
let createArray2;
createArray = function (length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray2(3, 'x'); // ['x', 'x', 'x']
// 泛型类
class GeneracNumber {
}
let myGeneracNumber = new GeneracNumber();
myGeneracNumber.baseValue = 0;
myGeneracNumber.add = function (x, y) {
    return x + y;
};
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
