"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_diff_quad_1 = require("./q-diff-quad");
/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 * @param a a double-double
 * @param b another double-double
 */
function qCompare(a, b) {
    return q_diff_quad_1.qDiffQuad(a, b)[1];
}
exports.qCompare = qCompare;
//# sourceMappingURL=q-compare.js.map