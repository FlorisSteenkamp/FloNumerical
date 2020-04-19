"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_div_quad_1 = require("../quad-precision/q-div-quad");
const abs = Math.abs;
const eps = Number.EPSILON;
const u = Number.EPSILON / 2;
const uu = Math.pow((Number.EPSILON / 2), 2);
/**
 * Returns the result of dividing two quad-precision floating point numbers
 * together with an absolute error bound where nE and dE are absolute error
 * bounds on the input values.
 * @param n numerator - a quad-precision float - low part
 * @param N numerator - a quad-precision float - high part
 * @param d denominator - a quad-precision float - low part
 * @param D denominator - a quad-precision float - high part
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function qDivQuadWithError([n, N], [d, D], nE, dE) {
    // estimate the result of the division
    let est = q_div_quad_1.qDivQuad([n, N], [d, D]);
    let _n = abs(n + N); // absolute value of estimate of n accurate to within 1/2 ulp
    let _d = abs(d + D); // absolute value of estimate of d accurate to within 1/2 ulp
    let δd = u * _d; // the max error in the rounding to _d
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    let minD = _d - δd - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    let err = ((_d * nE + _n * dE) / Math.pow(minD, 2)) + 9 * uu * abs(_n / _d);
    return { est, err };
}
exports.qDivQuadWithError = qDivQuadWithError;
//# sourceMappingURL=q-div-quad-with-err.js.map