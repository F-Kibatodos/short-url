// define sample function to randomly return an item in an array
const createPassword = array => {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetters = lowercaseLetters.toUpperCase()
const numbers = '0123456789'
let collection = lowercaseLetters
  .split('')
  .concat(uppercaseLetters.split(''))
  .concat(numbers.split(''))
let randomString = ''
for (let i = 0; i < 5; i++) {
  randomString += createPassword(collection)
}
module.exports = randomString
