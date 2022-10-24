function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 将 any 断言为其中一个类型
function getCacheData(key) {
    return window.cache[key];
}
const tom = getCacheData('tom');
tom.run();
