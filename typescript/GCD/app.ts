function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, (a % b));
    }
};

let numbers: number[] = [42, 56, 14]

let gcdResult = numbers[0]
for (let i = 0; i < numbers.length - 1; i++) {
    gcdResult = gcd(gcdResult, numbers[i]);
}

console.log(gcdResult);