"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Multiply a floating point expansion by -2.
 * * **error free**
 * @param param0
 */
function eMultByNeg2(e) {
    let e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(-2 * e[i]);
    }
    return e_;
}
exports.eMultByNeg2 = eMultByNeg2;
//# sourceMappingURL=e-mult-by-neg-2.js.map