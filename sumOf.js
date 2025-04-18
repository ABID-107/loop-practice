// --------------even---------------
let sumE = 0

for (let i = 206; i <= 311; i = i + 2) {
    if (i % 2 === 0) {
        sumE += i
    }
}

console.log('Display sum of all the even numbers from 206 to 311:', sumE)

// -----------------odd--------------------

let sumO = 0;

for (let i = 81; i <= 131; i = i + 2) {
    if (i % 2 !== 0) {
        sumO = sumO + i
    }
}

console.log('Display sum of all the odd numbers from 81 to 131:', sumO)