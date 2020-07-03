"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eSum = void 0;
const two_sum_1 = require("../basic/two-sum");
const grow_expansion_1 = require("./grow-expansion");
const fast_expansion_sum_1 = require("./fast-expansion-sum");
/**
 * Returns the result of summing an array of floating point expansions.
 *
 * * The result is exact in the form of a non-overlapping floating point
 * expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param terms An array of numbers to be summed; A term is represented by a
 * floating point expansion.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function eSum(terms) {
    let total = [0];
    for (let i = 0; i < terms.length; i++) {
        let term = terms[i];
        // add
        if (term.length === 1) {
            if (total.length === 1) {
                total = two_sum_1.twoSum(total[0], term[0]);
            }
            else {
                total = grow_expansion_1.growExpansion(total, term[0]);
            }
        }
        else {
            if (total.length === 1) {
                total = grow_expansion_1.growExpansion(term, total[0]);
            }
            else {
                total = fast_expansion_sum_1.fastExpansionSum(total, term);
            }
        }
    }
    return total;
}
exports.eSum = eSum;
//# sourceMappingURL=e-sum.js.map