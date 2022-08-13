// Reflect na maioria das vezes é apenas semântica
// A vantagem é que ele retorna true ou false

let result
const object = { name: 'Giacomo' }
const array = [1, 2, 3, 4, 5]

function sumNumbers(...numbers) {
  console.log('context =>', this)
  return numbers.reduce((sum, number) => sum + number, 0)
}

// sumNumbers(1, 2, 3)
// sumNumbers.apply({ example: 'teste' }, [1, 2, 3])
result = Reflect.apply(sumNumbers, { example: 'teste-reflect' }, [1, 2, 3])
console.log(result)

// Object.defineProperty(object, 'idade', { value: 20 })
result = Reflect.defineProperty(object, 'idade', { value: 20, enumerable: true, configurable: true })
console.log(result)
console.log(object)

// delete object.idade
result = Reflect.deleteProperty(object, 'idade')
console.log(result)
console.log(object)

result = Reflect.deleteProperty(array, 2)
console.log(result)
console.log(JSON.stringify(array))

result = Reflect.set(object, 'altura', 175)
console.log(result)
console.log(object)

result = Reflect.set(array, 0, 175)
console.log(result)
console.log(array)

result = Reflect.get(object, 'name')
console.log(result)

result = Reflect.get(array, 1)
console.log(result)

result = Reflect.has(object, 'name')
console.log(result)

result = Reflect.has(array, 1)
console.log(result)

result = Reflect.has(sumNumbers, 'name')
console.log(result)

const cidade = Symbol.for('cidade')

Reflect.set(object, cidade, 'Dourados')

// result = Object.getOwnPropertyNames(object).concat(Object.getOwnPropertySymbols(object))
// console.log(result)

result = Reflect.ownKeys(object)
console.log(result)

result = Reflect.ownKeys(sumNumbers)
console.log(result)

result = Reflect.ownKeys(array)
console.log(result)

Reflect.preventExtensions(object)

result = Reflect.set(object, 'teste', 0)

console.log(result)
console.log(object)

result = Reflect.isExtensible(object)
console.log(result)

Reflect.preventExtensions(array)
// array.push(10)

class Person {
    falar() {
        console.log('estou falando')
    }
}

console.log(Reflect.set(Person.prototype, 'andar', () => { console.log('estou andando') }))
console.log(Reflect.deleteProperty(Person.prototype, 'andar'))
console.log(Reflect.ownKeys(Person.prototype))

