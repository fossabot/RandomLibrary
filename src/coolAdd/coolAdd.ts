export function coolAdd(first: number, second?: number): number | ((secondValue: number) => number) {
    if (!first && !second) { return 0; }
    if (typeof first !== 'number') { return 0; }
    if (typeof second !== 'number' && second !== undefined) { return 0; }

    if (!second) {
        return (secondValue: number): number => first + secondValue;
    }

    return first + second;
}
