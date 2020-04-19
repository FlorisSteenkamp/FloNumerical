"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compress_1 = require("../double-expansion/compress");
/**
 * Returns the result of converting a floating point expansion to a
 * double-double (quad).
 */
function toQuad(e) {
    e = compress_1.compress(e);
    let len = e.length;
    if (len === 2) {
        return e; // already a quad
    }
    else if (len === 1) {
        return [0, e[0]];
    }
    else {
        return [e[len - 2], e[len - 1]];
    }
}
exports.toQuad = toQuad;
//# sourceMappingURL=to-quad.js.map