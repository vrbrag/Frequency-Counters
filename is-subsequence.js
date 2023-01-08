// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
   if (str1.length > str1.length) return false

   let str1Idx = 0;
   let str2Idx = 0;

   while (str2Idx < str2.length) {
      if (!str2[str2Idx]) return false

      if (str2[str2Idx] === str1[str1Idx]) {
         str1Idx += 1
      }
      if (str1Idx === str1.length) {
         // console.log(true)
         return true
      }
      str2Idx += 1

   }
   // console.log(false)
   return false
}
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)