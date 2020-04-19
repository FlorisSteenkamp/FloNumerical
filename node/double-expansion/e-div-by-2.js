"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Divide a floating point expansion by 2.
 * * **error free**
 * @param e
 */
function eDivBy2(e) {
    let e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(0.5 * e[i]);
    }
    return e_;
}
exports.eDivBy2 = eDivBy2;
//# sourceMappingURL=e-div-by-2.js.map