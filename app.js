/* console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i ++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i <= 100; i ++) {
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`'FIZZBUZZ'`);
    } else {
         if (i % 3 == 0) {
            console.log(`'FIZZ'`)
        }
        
        if (i % 5 == 0) {
            console.log(`'BUZZ'`);
        }
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

console.log("-----------")

let x = 0;
do {
    console.log(x);
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(`'FIZZBUZZ'`);
    } else {
         if (x % 3 == 0) {
            console.log(`'FIZZ'`)
        }
        
        if (x % 5 == 0) {
            console.log(`'BUZZ'`);
        }
    }
    x++;
} while (x <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;
    }
    if (i == n) {
        console.log(`Did not find ${numberToFind} within 1-${n}..`)
    }
} */

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let n = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10

console.log(`Start: ${start}`);
console.log(`End: ${n}`);
console.log(`Fizz Divisor: ${fizzDivisor}`);
console.log(`Buzz Divisor: ${buzzDivisor}`);

for (let i = start; i <= n; i++) {
    console.log(i);

    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("'FIZZBUZZ'");
    } else {
        if (i % fizzDivisor == 0) {
            console.log("'FIZZ'");
        }
        if (i % buzzDivisor == 0) {
            console.log("'BUZZ'");
    }
}}