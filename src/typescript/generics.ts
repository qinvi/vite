// 函数
function createArray1<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

// 多个泛型的函数
function swap<T, U>(temp: [T, U]): [U, T] {
  return [temp[1], temp[0]]
}

// 泛型约束
interface LengthInterface {
  length: number
}

function loggingProp<T extends LengthInterface>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingProp({ length: 1 })

// 多个泛型互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    // 显示类型转换，source 类型转换为 T 类型
    target[id] = (<T>source)[id]
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }

copyFields(x, { b: 10, d: 20 })

// 泛型接口
interface CreateArrayFunc {
  <T>(length: number, val: T): Array<T>
}

let createArray: CreateArrayFunc
createArray = function <T>(length: number, val: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = val
  }
  return result
}

// 泛型参数提前到接口名上：
interface CreateArrayFunc2<T> {
  (length: number, value: T): Array<T>
}

// 按照格式。需定义泛型类型
let createArray2: CreateArrayFunc2<any>
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray2(3, 'x') // ['x', 'x', 'x']

// 泛型类
class GeneracNumber<T> {
  baseValue: T
  add: (x: T, y: T) => T
}
let myGeneracNumber = new GeneracNumber<number>()
myGeneracNumber.baseValue = 0
myGeneracNumber.add = function (x, y) {
  return x + y
}

const resolvedPromise = /*#__PURE__*/ Promise.resolve() as Promise<any>
let currentFlushPromise: Promise<void> | null = null
function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
