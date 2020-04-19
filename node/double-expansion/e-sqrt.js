"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_square_1 = require("./two-square");
//import { eDivBy2 } from "./e-div-by-2";
//import { twoProduct } from "./two-product";
//import { qDiffQuad } from "../quad-precision/q-diff-quad";
//import { qMultDouble1 } from "../quad-precision/q-mult-double";
//import { qDivQuad } from "../quad-precision/q-div-quad";
//import { expansionProduct } from "./expansion-product";
//import { compress } from "./compress";
//import { expansionDiff } from "./expansion-diff";
//import { growExpansion } from "./grow-expansion";
//import { negativeOf } from "./negative-of";
//import { qMultDouble2 } from "..";
//import { qNegativeOf } from "../quad-precision/q-negative-of";
const sqrt = Math.sqrt;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a **double-double** as a **double-double**.
 * * **no error bound is returned**
 */
function qSqrt([xl, xh]) {
    let s = sqrt(xh);
    let [tl, th] = two_square_1.twoSquare(s);
    let e = (xh - th - tl + xl) * 0.5 / s;
    xh = s + e;
    xl = e - (xh - s);
    return [xl, xh];
}
exports.qSqrt = qSqrt;
//export { dSqrt2 }
//# sourceMappingURL=e-sqrt.js.map