// 函数表达式
let mySum = function (x: number, y: number): number | void {
  return x + y
}

// 使用 => 表达式
let mySum1: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y
}

// 接口定义函数形状
interface SearchFunc {
  (source: string, substring: string): boolean
}

let mySearch: SearchFunc

mySearch = function (source: string, substring: string): boolean {
  return source.search(substring) !== -1
}

// 可选参数
let sum = function Sum(x: number, y: number, z?: number): number {
  return x + y + z
}

// 默认参数
let sum1 = function Sum(x: number, z: number = 20, y: number): number {
  return x + y + z
}

// 重载
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: string | number): string | number | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
