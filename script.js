// let arr = [1,2,3,4,5,6,7,8,9,0];
// let s = 0
// for ( i = 0; i < arr.length; i++) {
//     s+= i;

//     console.log(i);
// }

for( i = 0; i < 4; i++) {
let row = " ";
for ( let j = 0; j < row - 1 - i; j++) {
    row += " ";
} 

  for ( let k = 0; k < 2 * i + 1; k++) {
    row += "*";
}
console.log(row);
}

