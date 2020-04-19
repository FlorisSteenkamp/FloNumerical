"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_add_quad_1 = require("./q-add-quad");
/**
 * Returns the result of summing an array of quad-precision floating point
 * numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 */
function qSum(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = q_add_quad_1.qAddQuad(q, qs[i]);
    }
    return q;
}
exports.qSum = qSum;
//# sourceMappingURL=q-sum.js.map