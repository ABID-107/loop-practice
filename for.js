// for (let i = 0; i < 20; i++) {
//     console.log('abid')
// }

let sum = 0;

for (let i = 81; i <= 131; i = i + 2) {
    if (i % 2 !== 0) {
        sum += i
    }
}
console.log('Display sum of all the odd numbers from 81 to 131 =', sum)