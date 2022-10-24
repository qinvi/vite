// 原始类型 + []
let array1: number[] = [1, 2]

// 泛型
let array2: Array<number> = [2, 3]

// 接口
interface arrayInterface {
  [index: number]: number
}
let array3: arrayInterface = [2, 3]
