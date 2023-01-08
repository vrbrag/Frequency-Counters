// add whatever parameters you deem necessary

// Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.

function pivotIndex(arr) {
   for (let i = 0; i < arr.length; i++) {
      const left = arr.slice(0, i)
      const right = arr.slice(i + 1, arr.length)
      // console.log(left, right)
      let sumLeft = left.reduce((a, b) => a + b, 0)
      let sumRight = right.reduce((a, b) => a + b, 0)

      if (sumLeft === sumRight) {
         // console.log(i)
         return i
      }
   }
   // console.log(-1)
   return -1
}
//          +++++++  pi ++++
pivotIndex([1, 2, 1, 6, 3, 1]) // 3
//          0, 1, 2, 3, 4, 5
pivotIndex([5, 2, 7]) // -1  no valid pivot index
pivotIndex([-1, 3, -3, 2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2
