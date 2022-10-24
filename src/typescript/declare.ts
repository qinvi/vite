// 定义全局变量
declare var jquery: (selector: string) => any

jquery('#aaa')

// 定义全局方法
declare function jQuery(selector: string): any

// 定义 class
declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}
