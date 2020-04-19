"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_product_1 = require("../double-expansion/two-product");
const fast_two_sum_1 = require("../double-expansion/fast-two-sum");
/**
 * Returns the product of two quad-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low order double (of x in x*y)
 * @param xh hight order double (of x in x*y)
 * @param yl low order double (of y in x*y)
 * @param yh hight order double (of y in x*y)
 */
function qMultQuad([xl, xh], [yl, yh]) {
    let [cl1, ch] = two_product_1.twoProduct(xh, yh);
    let tl1 = xh * yl;
    let tl2 = xl * yh;
    let cl2 = tl1 + tl2;
    let cl3 = cl1 + cl2;
    return fast_two_sum_1.fastTwoSum(ch, cl3);
}
exports.qMultQuad = qMultQuad;
//# sourceMappingURL=q-mult-quad.js.map