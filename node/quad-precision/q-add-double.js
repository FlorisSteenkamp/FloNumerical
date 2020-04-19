"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the result of adding a double to a quad precision floating point
 * number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param [xl,xh] a quad precision floating point number
 * @param y A double precision floating point number
 */
function qAddDouble([xl, xh], y) {
    //let [sl,sh] = twoSum(xh, y);
    let sh = xh + y;
    let c = sh - xh;
    let sl = (xh - (sh - c)) + (y - c);
    let v = xl + sl;
    //let [zl,zh] = fastTwoSum(sh,v);
    let zh = sh + v;
    let zl = v - (zh - sh);
    return [zl, zh];
}
exports.qAddDouble = qAddDouble;
//# sourceMappingURL=q-add-double.js.map