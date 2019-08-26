"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the negative of the given floating point expansion.
 * @param e A floating point number expansion
 */
function negativeOf(e) {
    let m = e.length;
    let h = new Array(m);
    for (let i = 0; i < m; i++) {
        h[i] = -e[i];
    }
    return h;
}
exports.negativeOf = negativeOf;
//# sourceMappingURL=negative-of.js.map