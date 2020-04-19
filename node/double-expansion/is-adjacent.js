"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_overlapping_1 = require("./is-overlapping");
/**
 * Returns true if x and y is adjacent, false otherwise.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param x A double floating point number
 * @param y Another double floating point number
 */
function isAdjacent(x, y) {
    return is_overlapping_1.isOverlapping(x, y) ||
        is_overlapping_1.isOverlapping(x, 2 * y) ||
        is_overlapping_1.isOverlapping(2 * x, y);
}
exports.isAdjacent = isAdjacent;
//# sourceMappingURL=is-adjacent.js.map