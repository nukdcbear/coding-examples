export function to_jaden_case(phrase: string): string {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(to_jaden_case(process.argv[2]))