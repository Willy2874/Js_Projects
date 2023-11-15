function fibonacciRecursive(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// Example usage:
const n = 10; // Replace with the desired Fibonacci sequence length
for (let i = 0; i < n; i++) {
    console.log(fibonacciRecursive(i));
}


