// add whatever parameters you deem necessary
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function frequencyCounter(num) {
   let freq = new Map()

   for (let val of num) {
      let valCount = freq.get(val) || 0;
      freq.set(val, valCount + 1)
   }
   return freq
}
function sameFrequency(num1, num2) {
   if (num1.length !== num2.length) return false

   let num1Freq = frequencyCounter(num1.toString())
   let num2Freq = frequencyCounter(num2.toString())

   for (let num of num1Freq.keys()) {
      if (num1Freq.get(num) !== num2Freq.get(num)) {
         console.log(false)
         return false
      }
   }
   console.log(true)
   return true
}
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false