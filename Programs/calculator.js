class Calculator {
  add(a, b) {
    return a + b;
  }
factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * this.factorial(n - 1);
}
}