"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const fast_two_sum_1 = require("./fast-two-sum");
const two_sum_1 = require("./two-sum");
const compress_1 = require("./compress");
/**
 * Returns the result of adding two expansions.
 *
 * Theorem 13: Let e = sum_(i=1)^m(e_i) and f = sum_(i=1)^n(f_i) be strongly
 * nonoverlapping expansions of m and n p-bit components, respectively, where
 * p >= 4. Suppose that the components of both e and f are sorted in order of
 * increasing magnitude, except that any of the e_i or f_i may be zero. On a
 * machine whose arithmetic uses the round-to-even rule, the following algorithm
 * will produce a strongly nonoverlapping expansion h such that
 * sum_(i=1)^(m+n)(e_i + f_i) = e + f, where the components of h are also in
 * order of increasing magnitude, except that any of the h_i may be zero.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastExpansionSum(e, f) {
    let g = merge_1.merge(e, f);
    let len = g.length;
    if (len === 1) {
        return g;
    }
    let h = new Array(len);
    let q;
    [h[0], q] = fast_two_sum_1.fastTwoSum(g[1], g[0]);
    for (let i = 2; i < len; i++) {
        [h[i - 1], q] = two_sum_1.twoSum(q, g[i]);
    }
    h[len - 1] = q;
    return compress_1.compress(h);
}
exports.fastExpansionSum = fastExpansionSum;
//# sourceMappingURL=fast-expansion-sum.js.map