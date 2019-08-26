"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_expansion_sum_1 = require("./fast-expansion-sum");
const negative_of_1 = require("./negative-of");
/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param f Another floating point expansion
 */
function expansionDiff(e, f) {
    let g = negative_of_1.negativeOf(f);
    return fast_expansion_sum_1.fastExpansionSum(e, g);
}
exports.expansionDiff = expansionDiff;
//# sourceMappingURL=expansion-diff.js.map