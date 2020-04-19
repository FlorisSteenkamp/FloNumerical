"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sign_1 = require("./sign");
const msb_exponent_1 = require("../double-representation/msb-exponent");
const compress_1 = require("./compress");
const reduce_significand_1 = require("./reduce-significand");
/**
 * Returns a floating point expansion accurate to the given number of bits.
 * Extraneous bits are discarded.
 * @param a a floating point expansion
 * @param l the number of accurate bits to keep
 */
function toBitlength(a, l) {
    a = compress_1.compress(a);
    if (sign_1.sign(a) === 0) {
        return [0];
    }
    let maxMsb = msb_exponent_1.msbExponent(a[a.length - 1]);
    let msb = maxMsb;
    let i = a.length - 1; // start at most significant byte
    while (i > 0) {
        let msb_ = msb_exponent_1.msbExponent(a[i - 1]);
        if (maxMsb - msb_ > l) {
            break;
        }
        msb = msb_;
        i--;
    }
    let keepBits = Math.min(l - (maxMsb - msb), 53);
    let b = a[i];
    b = reduce_significand_1.reduceSignificand(b, keepBits);
    let result = a.slice(i);
    result[0] = b;
    return result;
}
exports.toBitlength = toBitlength;
//# sourceMappingURL=to-bit-length.js.map