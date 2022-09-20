function persistence(num: string): number {
    if (num.length === 1) {
        return 0
    }
    let multPersistance = 1;
    let product = multiplydigits(parseInt(num));

    while (product.toString().length !== 1) {
        product = multiplydigits(product);
        multPersistance += 1;
    }

    return multPersistance;
}

function multiplydigits(num: number): number {
    let numbers = [...num.toString()];

    let total = parseInt(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
        total = total * parseInt(numbers[i]);
    }

    return total;
}
console.log(persistence(process.argv[2]))