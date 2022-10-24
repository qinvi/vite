// 联合类型
interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 父类断言为更具体的子类
interface ApiCode extends Error {
  code: number
}
interface HttpCode extends Error {
  statusCode: number
}
function isApiError(error: Error) {
  if (typeof (error as ApiCode).code === 'number') {
    return true
  }
  return false
}

// 将 any 断言为其中一个类型
function getCacheData(key: string): any {
  return (window as any).cache[key]
}

interface Cat {
  name: string
  run(): void
}

const tom = getCacheData('tom') as Cat
tom.run()
