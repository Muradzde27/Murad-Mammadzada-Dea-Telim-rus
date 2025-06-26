// let arr = [1,2,3,4,5,6,7,8,9,0];
// let s = 0
// for ( i = 0; i < arr.length; i++) {
//     s+= i;

//     console.log(i);
// }

///////////////////////////////////////////////

// for( i = 0; i < 4; i++) {
// let row = " ";
// for ( let j = 0; j < row - 1 - i; j++) {
//     row += " ";
// } 



//   for ( let k = 0; k < 2 * i + 1; k++) {
//     row += "*";
// }
// console.log(row);
// }

///////////////////////////////////////////////
// function Numbers(start, end) {
//     if (start > end) return 0;
//     if (start % 2 !== 0) start++; 
//     if (start > end) return 0;
//     return start + Numbers(start + 2, end);
// }
// let start = 1;
// let end = 10;

// console.log(Numbers(start,end))

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         }else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(n)


let arr = [0, 1];
for (let i = 2; i < 20; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr);