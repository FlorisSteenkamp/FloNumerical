"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Multiply a floating point expansion by 2.
 * * **error free**
 * @param param0
 */
function eMultBy2(e) {
    let e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(2 * e[i]);
    }
    return e_;
}
exports.eMultBy2 = eMultBy2;
//# sourceMappingURL=e-mult-by-2.js.map