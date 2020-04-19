"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_diff_quad_1 = require("./q-diff-quad");
/**
 * Returns the maximum of a and b.
 * @param a a double-double
 * @param b another double-double
 */
function qMax(a, b) {
    let res = q_diff_quad_1.qDiffQuad(a, b)[1];
    return res > 0 ? a : b;
}
exports.qMax = qMax;
//# sourceMappingURL=q-max.js.map