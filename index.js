function getName1(name) {
  return 'Имя равно ' + name
}
const fistName = getName1('Елена')
console.log(fistName)

const getName2 = function getName2(name) {
  return 'Имя равно ' + name
}
const fistName1 = getName2('Елена')
console.log(fistName1)

const getName3 = (name) => {
  return 'Имя равно ' + name
}
const getName31 = getName3('Елена')
console.log(getName31)
// console.log(arrow)

// const arrow01 = (name) => console.log('Имя равно', name)
// arrow01('Елена')
