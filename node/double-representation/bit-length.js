"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_max_set_bit_1 = require("./get-max-set-bit");
const compress_1 = require("../double-expansion/compress");
const exponent_1 = require("./exponent");
const sign_1 = require("../double-expansion/sign");
/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a A double precision floating point number
 */
function bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return get_max_set_bit_1.getHighestSetBit(a) - get_max_set_bit_1.getLowestSetBit(a) + 1;
}
exports.bitLength = bitLength;
/**
 * Returns the bit-length of the significand of the given floating point
 * expansion in such a way that trailing zeros are not counted.
 * * precondition: subnormals not currently supported
 * @param a A double precision floating point expansion
 */
function expBitLength(a) {
    let a_ = compress_1.compress(a);
    if (sign_1.sign(a_) === 0) {
        return 0;
    }
    let msbyte = a_[a_.length - 1];
    let lsbyte = a_[0];
    return exponent_1.exponent(msbyte) - exponent_1.exponent(lsbyte) + (53 - get_max_set_bit_1.getLowestSetBit(lsbyte));
}
exports.expBitLength = expBitLength;
//# sourceMappingURL=bit-length.js.map