// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// -- .reduce METHOD --

// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '')
// }

// EASIEST SOLUTION: Simoply use the .reverse function.
// Likely not the best for an interview because it is a bit of cheating

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// -- For loop way --
//  *** for( let char of str) is SAME as saying for(let i = 0; i < str.length; i++)
//      *** it is a new and updated way but ONLY works when iterating by one
// function reverse(str) {
//     let reversed = '';
//     for(let char of str){
//         reversed = char + reversed;
//     }
//     return reversed
// }