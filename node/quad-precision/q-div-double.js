"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_product_1 = require("../double-expansion/two-product");
const fast_two_sum_1 = require("../double-expansion/fast-two-sum");
/**
 * Returns the result of dividing a quad-precision floating point number by a
 * double.
 *
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param e a quad-precision floating point number
 * @param f a double-precision floating point number
 */
function qDivDouble([xl, xh], y) {
    let th = xh / y;
    let [πl, πh] = two_product_1.twoProduct(th, y);
    let δh = xh - πh; // exact operation
    let δt = δh - πl; // exact operation
    let δ = δt + xl;
    let tl = δ / y;
    return fast_two_sum_1.fastTwoSum(th, tl);
}
exports.qDivDouble = qDivDouble;
//# sourceMappingURL=q-div-double.js.map