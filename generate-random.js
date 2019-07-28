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
// 用來裝用過的亂數
let usedString = []
const generateRandomString = () => {
  let randomString = ''
  for (let i = 0; i < 5; i++) {
    randomString += createPassword(collection)
  }
  // 檢查是否生成的亂數被用過了
  let checkUsed = usedString.some(string => {
    string === randomString
  })
  // 沒有的話放進 usedString 備查
  if (!checkUsed) usedString.push(randomString)
  // 有的話重新生成一個
  else generateRandomString()
  return randomString
}

module.exports = generateRandomString
