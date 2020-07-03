"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eAbs = void 0;
const e_sign_1 = require("./e-sign");
const e_negative_of_1 = require("./e-negative-of");
/**
 * Returns the absolute value of the given floating point expansion.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param a a floating point number expansion
 */
function eAbs(a) {
    if (e_sign_1.eSign(a) < 0) {
        return e_negative_of_1.eNegativeOf(a);
    }
    return a;
}
exports.eAbs = eAbs;
//# sourceMappingURL=e-abs.js.map