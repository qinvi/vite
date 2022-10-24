// 类实现接口
interface Alarm {
  alert(): void
}

class Door {}

class SubDoor extends Door implements Alarm {
  alert() {
    console.log('door alert')
  }
}

class Car implements Alarm {
  alert() {
    console.log('car alert')
  }
}

// 接口继承接口
interface LightAlarm extends Alarm {
  lightOn(): void
  lightOf(): void
}

// 接口继承类
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

function printPoint(p: Point) {
  console.log(p.x, p.y)
}

printPoint(new Point(1, 2))

// 相当于以下 interface 实现
interface pointInstancyType {
  x: number
  y: number
}
function printPoint1(p: pointInstancyType) {
  console.log(p.x, p.y)
}
printPoint(new Point(1, 2))

interface A {
  a: number
  b: string
  isA: boolean
}
