"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_adjacent_1 = require("../double-expansion/is-adjacent");
/**
 * Returns true if the given floating point expansion is non-adjacent and
 * components of the expansion are ordered in ascending order by absolute value,
 * except that some components may be zero.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf for the
 * definition of adjacency.
 * Implemented for testing purposes.
 * @param x A floating point expansion.
 */
function isValid(x) {
    for (let i = 1; i < x.length; i++) {
        if (x[i] !== 0 && x[i - 1] !== 0 &&
            Math.abs(x[i - 1]) >= Math.abs(x[i])) {
            //console.log('Not in ascending order.');
            return false;
        }
        if (is_adjacent_1.isAdjacent(x[i - 1], x[i])) {
            //console.log('The expansion has adjacent components.');
            return false;
        }
    }
    return true;
}
exports.isValid = isValid;
//# sourceMappingURL=is-valid.js.map