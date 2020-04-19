"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_product_1 = require("./two-product");
const expansion_diff_1 = require("./expansion-diff");
const two_diff_1 = require("./two-diff");
const fast_expansion_sum_1 = require("./fast-expansion-sum");
const scale_expansion_1 = require("./scale-expansion");
const compress_1 = require("./compress");
/**
 * Dont use! Only for testing purposes - too slow. Use orien2d instead.
 * @param a
 * @param b
 * @param c
 */
function orient2dExact(a, b, c) {
    // det := ax(by - cy) - ay(bx - cx) + (bx*cy - by*cx)
    let term1 = scale_expansion_1.scaleExpansion(two_diff_1.twoDiff(b[1], c[1]), a[0]);
    let term2 = scale_expansion_1.scaleExpansion(two_diff_1.twoDiff(b[0], c[0]), -a[1]);
    let term3 = expansion_diff_1.expansionDiff(two_product_1.twoProduct(b[0], c[1]), two_product_1.twoProduct(b[1], c[0]));
    let term4 = fast_expansion_sum_1.fastExpansionSum(term2, term3);
    let det = fast_expansion_sum_1.fastExpansionSum(term1, term4);
    det = compress_1.compress(det);
    return det[det.length - 1];
}
exports.orient2dExact = orient2dExact;
//# sourceMappingURL=orient2d-exact.js.map