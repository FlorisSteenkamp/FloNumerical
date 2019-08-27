"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("./sign");
const negative_of_1 = require("./negative-of");
/**
 * Returns the absolute value of the given expansion.
 * @param a A floating point number expansion
 */
function abs(a) {
    if (sign_1.sign(a) < 0) {
        return negative_of_1.negativeOf(a);
    }
    return a;
}
exports.abs = abs;
//# sourceMappingURL=abs.js.map