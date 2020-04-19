"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_mult_quad_1 = require("./q-mult-quad");
/**
 * Returns the result of multiplying together an array of quad-precision
 * floating point numbers naively (i.e. not using pairwise addition to reduce
 * error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 */
function qProduct(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = q_mult_quad_1.qMultQuad(q, qs[i]);
    }
    return q;
}
exports.qProduct = qProduct;
//# sourceMappingURL=q-product.js.map