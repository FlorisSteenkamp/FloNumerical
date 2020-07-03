"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleExpansion2 = exports.scaleExpansion = void 0;
const two_product_1 = require("../basic/two-product");
const two_sum_1 = require("../basic/two-sum");
const fast_two_sum_1 = require("../basic/fast-two-sum");
const e_compress_1 = require("./e-compress");
/**
 * Returns the result of multiplying an expansion by a double.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and let b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param e a double floating point expansion
 * @param b a double
 */
function scaleExpansion(e, b) {
    let m = e.length;
    let h = new Array(2 * m);
    let q;
    let q_;
    [h[0], q] = two_product_1.twoProduct(e[0], b);
    for (let i = 1; i < m; i++) {
        let [t, T] = two_product_1.twoProduct(e[i], b);
        [h[2 * i - 1], q_] = two_sum_1.twoSum(q, t);
        [h[2 * i], q] = fast_two_sum_1.fastTwoSum(T, q_);
    }
    h[2 * m - 1] = q;
    return e_compress_1.eCompress(h);
}
exports.scaleExpansion = scaleExpansion;
/**
 * Returns the result of multiplying an expansion by a double.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and let b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param b a double
 * @param e a double floating point expansion
 */
function scaleExpansion2(b, e) {
    let m = e.length;
    let h = new Array(2 * m);
    let q;
    let q_;
    [h[0], q] = two_product_1.twoProduct(e[0], b);
    for (let i = 1; i < m; i++) {
        let [t, T] = two_product_1.twoProduct(e[i], b);
        [h[2 * i - 1], q_] = two_sum_1.twoSum(q, t);
        [h[2 * i], q] = fast_two_sum_1.fastTwoSum(T, q_);
    }
    h[2 * m - 1] = q;
    return e_compress_1.eCompress(h);
}
exports.scaleExpansion2 = scaleExpansion2;
//# sourceMappingURL=scale-expansion.js.map