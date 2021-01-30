
// 1. Composite function

const rokket = a => b => c => a * b * c;
console.log(rokket(2)(5)(3))
console.log(rokket(4)(2)(2))
console.log(rokket(8)(2)(1))


// 2. Longest string 

const rokket = (array) => {
  return array.sort( (a, b) => {   // Step1. Retorna un arreglo con los items ordenados (De mayor a menor segun el length de cada item)
    return b.length - a.length
  })[0]                            // Step2. resuelvo con el retorno del indice 0, que corresponde al Item del arreglo con el mayor length
}

console.log(rokket(['best', 'company', 'ever']))


// 3. String repetition

const rokket = (a, n) => {
  let value = ''
  while (n != 0) {
    value += a
    n -= 1
  } 
  return value
}

console.log(rokket('node', 5))

// 4. Only last names

const rokket = (contacts) => {
  return contacts.map(x => x.lastName)
}

const contacts = [
  { firstName: 'Juanito', lastName: 'Rokket' },
  { firstName: 'James', lastName: 'Bond' },
  { firstName: 'Harry', lastName: 'Potter' }
]

console.log(rokket(contacts))

// 5. Unique numbers

const rokket = (param1, param2) => {
  const array = [...param1, ...param2]
  return Array.from(new Set(array))
}
console.log(rokket([1, 2, 5], [2, 1, 6]))
console.log(rokket([1, 2, 3], [4, 5, 6])) 



