"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_max_set_bit_1 = require("./representation/get-max-set-bit");
const exponent_1 = require("./representation/exponent");
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
function isOverlapping(a, b) {
    return !isNonOverlapping(a, b);
}
exports.isOverlapping = isOverlapping;
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
function isNonOverlapping(a, b) {
    if (a === 0 || b === 0) {
        return true;
    }
    if (Math.abs(b) > Math.abs(a)) {
        [a, b] = [b, a];
    }
    // At this point abs(a) > abs(b)
    let l = get_max_set_bit_1.getLowestSetBit(a);
    let h = get_max_set_bit_1.getHighestSetBit(b);
    let shift = exponent_1.exponent(a) - exponent_1.exponent(b);
    return (l + shift) > h;
}
exports.isNonOverlapping = isNonOverlapping;
/**
 * Returns true if all components of the given expansion is non-overlapping,
 * false otherwise.
 * @param e An expansion
 */
function isNonOverlappingAll(e) {
    for (let i = 1; i < e.length; i++) {
        if (isOverlapping(e[i - 1], e[i])) {
            return false;
        }
    }
    return true;
}
exports.isNonOverlappingAll = isNonOverlappingAll;
//# sourceMappingURL=is-overlapping.js.map