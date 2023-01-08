// add whatever parameters you deem necessary

// Two frequency counters
// If key and value of the message characters are not found in the letters characters, return false
// => is {'a': 2 } in {'a': 1, 'b': 1, 'c': 1,} ??
// => is {'a': 1, 'b': 1, 'c': 1} in {'a': 1, 'b': 1, 'c': 1, 'd': 1} ??

function frequencyCounter(str) {
   let freq = new Map()

   for (let val of str) {
      let valCount = freq.get(val) || 0;
      freq.set(val, valCount + 1);
   }
   return freq
}

function constructNote(msg, letters) {

   if (msg.length > letters.length) return false;
   const msgFreq = frequencyCounter(msg);
   const lettersFreq = frequencyCounter(letters);

   for (let char of msgFreq.keys()) {
      if (msgFreq.get(char) !== lettersFreq.get(char)) {
         return false
      }
   }
   return true
}
// constructNote("abcd", "")
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true