"use strict";
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
Object.defineProperty(exports, "__esModule", { value: true });
const octets_to_double_1 = require("./octets-to-double");
/**
 * @param str
 */
function binaryStringToDouble(str) {
    return octets_to_double_1.octetsToDouble(str.match(/.{8}/g).map(binaryStringToInt));
}
exports.binaryStringToDouble = binaryStringToDouble;
/**
 * e.g. "10001000" -> 136
 */
function binaryStringToInt(b) {
    return parseInt(b, 2);
}
//# sourceMappingURL=binary-string-to-double.js.map