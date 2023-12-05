// 1.
console.log('1 UŽDUOTIS')
function minutesToSeconds(minutes) {
    const seconds = minutes * 60
    return seconds + " seconds"
  }
  
  const result1 = minutesToSeconds(3)
  console.log(result1)

// 2.
console.log('2 UŽDUOTIS')
function daysLived(age) {
    const days = age * 365
    return days
  }
  const result2 = daysLived(20)
  console.log(result2)

// 3.
console.log('3 UŽDUOTIS')
const square = (number) => number * number
console.log(square(5))

// 4.
console.log('4 UŽDUOTIS')
const triangleArea = (height, width) => (height * width) / 2
console.log(triangleArea(10, 10))

// 5.
console.log('5 UŽDUOTIS')
function lastLetter(str) {
    return str.charAt(str.length - 1)
  }
  const result3 = lastLetter("Petras")
  console.log(result3)
  
// 6.
console.log('6 UŽDUOTIS')
function reverseString(str) {
    return str.split('').reverse().join('').toLowerCase()
  }
  const result4 = reverseString("Petras")
  console.log(result4)

// 7.
console.log('7 UŽDUOTIS')
function largestNegativeNumber(arr) {
    const negativeNumbers = arr.filter(number => number < 0)
    const largestNegative = Math.max(...negativeNumbers) 
    return largestNegative.toString()
  }
  const result5 = largestNegativeNumber([-1, -100, -5, 10, 0, 11])
  console.log(result5)
  
// 8.
console.log('8 UŽDUOTIS')
function randomNumbers(count) {
    const randomNumbers = []
    for (var i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10) + 1
      randomNumbers.push(randomNumber)
    }
    return randomNumbers
  }
  const result6 = randomNumbers(3)
  console.log(result6)
  

// 9.
console.log('9 UŽDUOTIS')
const sumGreaterThan100 = (num1, num2) => (num1 + num2) <= 100
console.log(sumGreaterThan100(10, 50))

// 10.
console.log('10 UŽDUOTIS')
function sortArrayOfObjects(arr) {
    arr.sort((a, b) => {
      if (a.age !== b.age) {
        return a.age - b.age
      } else {
        return a.name.localeCompare(b.name)
      }
    })
    return arr
  }
  const result7 = sortArrayOfObjects([
    { name: "Alfredas", age: 25 },
    { name: "Jonas", age: 25 },
    { name: "Kasparas", age: 20 },
    { name: "Benas", age: 20}
  ])
  console.log(result7)

// 11.
console.log('11 UŽDUOTIS')
function holiday(date) {
    const holidays = [
      new Date(date.getFullYear(), 0, 1),
      new Date(date.getFullYear(), 11, 25),
      new Date(date.getFullYear(), 11, 26)
    ]
    return holidays.some(holiday => holiday.getTime() === date.getTime())
  }
  const result8 = holiday(new Date(2020, 11, 25))
  console.log(result8)
  
// 12.
console.log('12 UŽDUOTIS')
function missingNumber(arr) {
    arr.sort((a, b) => a - b)  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i] + 1
      }
    }
    return arr[arr.length - 1] + 1
  }
  const result9 = missingNumber([1, 2, 4, 5])
  console.log(result9)
  