"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the absolute value of the given quad precision floating point number.
 * @param a A quad precision floating point number
 */
function qAbs(f) {
    let [q, Q] = f;
    return (Q < 0) ? [-q, -Q] : f;
}
exports.qAbs = qAbs;
//# sourceMappingURL=q-abs.js.map