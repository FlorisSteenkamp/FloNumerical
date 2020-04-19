"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_sum_1 = require("./two-sum");
const compress_1 = require("./compress");
/**
 * Returns the result of adding two expansions.
 * * **fastExpansionSum is nearly always preferred above this function.**
 *
 * Theorem 12: Let e = sum_(i=1)^m(e_i) and f = sum_(i=1)^n(f_i) be
 * nonoverlapping expansions of m and n-bit components respectively, where
 * p >= 3. Suppose that the components of both e and f are sorted in order of
 * increasing magnitude, except that any of the e_i or f_i may be zero. Then the
 * following algorithm will produce a nonoverlapping expansion h such that
 * h = sum_(i=1)^(m+n)(h_i) = e + f, where the components of h are in order of
 * increasing magnitude, except that any of the h_i may be zero. Furthermore, if
 * e and f are nonadjacent and round-to-even tiebreaking is used, then h is
 * nonadjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function expansionSum(e, f) {
    for (let i = 0; i < f.length; i++) {
        // the below is growExpansion unrolled
        let m = e.length;
        let q = f[i];
        let h = new Array(m + 1);
        for (let i = 0; i < m; i++) {
            // Note the use of twoSum and not fastTwoSum.
            [h[i], q] = two_sum_1.twoSum(q, e[i]);
        }
        h[m] = q;
        e = h;
    }
    return compress_1.compress(e);
}
exports.expansionSum = expansionSum;
//# sourceMappingURL=expansion-sum.js.map