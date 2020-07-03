"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eIntPow = void 0;
const e_product_1 = require("./e-product");
const expansion_product_1 = require("./expansion-product");
/**
 * Returns a**i, where i is a non-negative integer.
 * @param a a floating point expansion
 */
// TODO - this algorithm's speed can easily be improved significantly
function eIntPow(a, p) {
    // a^0 === 1
    if (p === 0) {
        return [1];
    }
    // a^1 === a
    if (p === 1) {
        return a;
    }
    if (p === 2) {
        return expansion_product_1.expansionProduct(a, a);
    }
    let as = [];
    for (let i = 0; i < p; i++) {
        as.push(a);
    }
    return e_product_1.eProduct(as);
}
exports.eIntPow = eIntPow;
//# sourceMappingURL=e-int-pow.js.map