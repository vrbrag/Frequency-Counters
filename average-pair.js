// add whatever parameters you deem necessary 

function averagePair(integers, target) {

   if (integers.length === 0) return false

   let left = 0;
   let right = integers.length - 1;

   while (left < right) {
      const avg = (integers[left] + integers[right]) / 2

      if (avg === target) {
         console.log(true)
         return true
      }
      if (avg < target) {
         left++;
      } else {
         right--;
      }

   }
   console.log(false)
   return false

}
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false