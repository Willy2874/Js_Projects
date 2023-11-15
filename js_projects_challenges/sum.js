// calculate sum of numbers from 1 to 'n'

function calculateSum(n) {
    let sum = 0;
   
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
return sum;
}
const n = 5; /*example usage*/
const result = calculateSum(n);

console.log(`The sum of numbers from 1 to ${n} is ${result}.`);







