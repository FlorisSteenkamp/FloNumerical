"use strict";
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [64, 94, 221, 47, 26, 159, 190, 119] -> 123.456
 */
function octetsToDouble(octets) {
    var buffer = new ArrayBuffer(8);
    new Uint8Array(buffer).set(octets);
    return new DataView(buffer).getFloat64(0, false);
}
exports.octetsToDouble = octetsToDouble;
//# sourceMappingURL=octets-to-double.js.map