
import { getLowestSetBit, getHighestSetBit } from "./representation/get-max-set-bit";
import { exponent } from "./representation/exponent";


/**
 * Returns true if a and b does not overlap, false otherwise.
 * 
 * Two floating-point values x and y are nonoverlapping if the least significant 
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * 
 * Implemented for testing purposes.
 * @param a A double
 * @param b Another double
 */
function isOverlapping(a: number, b: number) {
    return !isNonOverlapping(a,b);
}


/**
 * Returns true if a and b overlaps, false otherwise.
 * 
 * Two floating-point values x and y are nonoverlapping if the least significant 
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * 
 * Implemented for testing purposes.
 * 
 * @param a A double
 * @param b Another double
 */
function isNonOverlapping(a: number, b: number) {
    if (a === 0 || b === 0) { return true; }

    if (Math.abs(b) > Math.abs(a)) { 
        [a,b] = [b,a];
    }

    // At this point abs(a) > abs(b)
    let l = getLowestSetBit(a)!;
    let h = getHighestSetBit(b)!;

    let shift = exponent(a) - exponent(b);

    return (l + shift) > h;
}


/**
 * Returns true if all components of the given expansion is non-overlapping,
 * false otherwise.
 * @param e An expansion
 */
function isNonOverlappingAll(e: number[]) {
    for (let i=1; i<e.length; i++) {
        if (isOverlapping(e[i-1], e[i])) {
            return false;
        }
    }

    return true;
}


export { isOverlapping, isNonOverlapping, isNonOverlappingAll }
