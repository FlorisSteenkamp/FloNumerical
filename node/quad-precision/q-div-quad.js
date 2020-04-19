"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_two_sum_1 = require("../double-expansion/fast-two-sum");
const q_mult_double_1 = require("./q-mult-double");
/**
 * Returns the result of dividing two quad-precision floating point numbers,
 * i.e. returns x/y.
 *
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ),
 * where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON
 * * the largest error found was 8.465u^2
 *
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param e a quad-precision floating point number
 * @param f another quad-precision floating point number
 */
function qDivQuad([xl, xh], [yl, yh]) {
    let th = xh / yh;
    // approximation to th*(yh + yl) using Algorithm 7
    let [rl, rh] = q_mult_double_1.qMultDouble1(th, [yl, yh]);
    let πh = xh - rh; // exact operation
    let δl = xl - rl;
    let δ = πh + δl;
    let tl = δ / yh;
    return fast_two_sum_1.fastTwoSum(th, tl);
}
exports.qDivQuad = qDivQuad;
//# sourceMappingURL=q-div-quad.js.map