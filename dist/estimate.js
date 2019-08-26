"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the result of the given floating point expansion rounded to a single
 * floating point number.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 */
function estimate(e) {
    let Q = e[0];
    for (let i = 1; i < e.length; i++) {
        Q += e[i];
    }
    return Q;
}
exports.estimate = estimate;
//# sourceMappingURL=estimate.js.map