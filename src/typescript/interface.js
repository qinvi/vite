class Door {
}
class SubDoor extends Door {
    alert() {
        console.log('door alert');
    }
}
class Car {
    alert() {
        console.log('car alert');
    }
}
// 接口继承类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function printPoint(p) {
    console.log(p.x, p.y);
}
printPoint(new Point(1, 2));
function printPoint1(p) {
    console.log(p.x, p.y);
}
printPoint(new Point(1, 2));
