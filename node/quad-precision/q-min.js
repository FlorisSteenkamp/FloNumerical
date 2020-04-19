"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_diff_quad_1 = require("./q-diff-quad");
/**
 * Returns the minimum of a and b.
 * @param a a double-double
 * @param b another double-double
 */
function qMin(a, b) {
    let res = q_diff_quad_1.qDiffQuad(a, b)[1];
    return res > 0 ? b : a;
}
exports.qMin = qMin;
//# sourceMappingURL=q-min.js.map