export const isPangram = (phrase: string): boolean => {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    for (let char of alpha) {
        let reg = new RegExp(char, 'gi');

        if ((phrase.match(reg) || []).length === 0) {
            return false;
        }
    }

    return true;
}

let result = isPangram('Do not tread on me');
console.log(result);