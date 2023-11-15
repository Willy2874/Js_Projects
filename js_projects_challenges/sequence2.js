function fibonacciIterative(n) {
    const fibSequence = [0, 1];
    while (fibSequence.length < n) {
        const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }
    return fibSequence;
}

// Example usage:
const n = 10; // Replace with the desired Fibonacci sequence length
const result = fibonacciIterative(n);
console.log(result);

