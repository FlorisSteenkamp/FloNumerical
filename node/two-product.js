"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const split_1 = require("./split");
/**
 * Returns the exact result of multiplying two doubles.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function twoProduct(a, b) {
    let x = a * b;
    let [a_high, a_low] = split_1.split(a);
    let [b_high, b_low] = split_1.split(b);
    let err1 = x - (a_high * b_high);
    let err2 = err1 - (a_low * b_high);
    let err3 = err2 - (a_high * b_low);
    let y = (a_low * b_low) - err3;
    return [y, x];
}
exports.twoProduct = twoProduct;
//# sourceMappingURL=two-product.js.map