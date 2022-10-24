type Name = string
type NameFunc = () => string

type NameOrFunc = Name | NameFunc

function getName(n: NameOrFunc) {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
