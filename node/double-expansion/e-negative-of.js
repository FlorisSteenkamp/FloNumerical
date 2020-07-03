"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eNegativeOf = void 0;
/**
 * Returns the negative of the given floating point expansion.
 * @param e A floating point number expansion
 */
function eNegativeOf(e) {
    let m = e.length;
    let h = new Array(m);
    for (let i = 0; i < m; i++) {
        h[i] = -e[i];
    }
    return h;
}
exports.eNegativeOf = eNegativeOf;
//# sourceMappingURL=e-negative-of.js.map