"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the exact result of subtracting b from a (as a floating point
 * expansion).
 * @param a
 * @param b
 */
function twoDiff(a, b) {
    let x = a - b;
    let bvirt = a - x;
    let y = (a - (x + bvirt)) + (bvirt - b);
    return [x, y];
}
exports.twoDiff = twoDiff;
//# sourceMappingURL=two-diff.js.map