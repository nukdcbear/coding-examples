function FindIntersection(strArr: string[]): string {

    let matches = "";
    for (let num1 of strArr[0].split(",")) {
        for (let num2 of strArr[1].split(",")) {
            if (num1.trim() === num2.trim()) {
                matches += num1.trim() + " ";
            }
        }
    }
    return matches.trim();
}

console.log(FindIntersection([process.argv[2], process.argv[3]]))