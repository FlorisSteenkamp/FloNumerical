"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_expansion_sum_1 = require("./fast-expansion-sum");
const scale_expansion_1 = require("./scale-expansion");
const compress_1 = require("./compress");
/**
 * Returns the product of two expansions.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * As per Shewchuk in the above paper: "To find the product of two expansions
 * e and f, use SCALE-EXPANSION (with zero elimination) to form the expansions
 * ef_1, ef_2, ..., then sum these using a distillation tree."
 *
 * A distillation tree used with fastExpansionSum will give O(k*log k) vs O(k^2)
 * operations.
 *
 * Implemented naively and not as described by Shewchuk (i.e. the algorithm
 * takes O(k^2) operations).
 * @param e An expansion
 * @param f Another expansion
 */
function expansionProduct(e, f) {
    let sum = [0];
    for (let i = 0; i < e.length; i++) {
        sum = fast_expansion_sum_1.fastExpansionSum(sum, scale_expansion_1.scaleExpansion(f, e[i]));
    }
    return compress_1.compress(sum);
}
exports.expansionProduct = expansionProduct;
//# sourceMappingURL=expansion-product.js.map