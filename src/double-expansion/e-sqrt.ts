
import { twoSquare } from "./two-square";
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
function qSqrt([xl,xh]: number[]): number[] {
    let s = sqrt(xh);
    let [tl,th] = twoSquare(s);
    let e = (xh - th - tl + xl) * 0.5 / s;
    xh = s + e;
    xl = e - (xh - s);

    return [xl,xh];
}


/**
 * Returns the square root of a **double** as a **double-double**
 * 
 * Based on Algorithm 11: Truncated “division-free” Newton iteration (31) based 
 * algorithm for reciprocal of the square root of an FP expansion. By 
 * “division-free” we mean that we do not need a division of FP expansions.
 * * only compact expansions are allowed as input - so call compress before 
 * calling this function AND make sure expansion length is correct.
 * * error bound: ??? TODO - it is in the paper
 * @param a a floating point expansion - important: see function description
 */
// TODO - finish implementation of this function (add error bounds) It works 
// otherwise
/*
function dSqrt2(a: number): number[] {
    let x0 = 1/sqrt(a);

    // --------
    // i === 0
    // --------

    // let v[0:2**(i+1)-1] = expansionProduct(x[0:2**i−1], a[0:2**(i+1)−1], 2**(i+1));
    // i === 0 => let v[0:1] = expansionProduct(x[0:0], a[0:1], 2);
    let v = twoProduct(x0, a);

    // let w[0:2**(i+1)-1] = expansionProduct(x[0:2**i−1], v[0:2**(i+1)−1], 2**(i+1));
    // i === 0 => let w[0:1] = expansionProduct(x[0:0], v[0:1], 2);
    let w = qMultDouble1(x0, v);

    // let y[0:2**(i+1)-1] = expansionDiff(3, w[0:2**(i+1) − 1], 2**(i+1));
    // i === 0 => let y[0:1] = expansionDiff(3, w[0:2**(i+1) − 1], 2);
    let y = qDiffQuad([0,3],w);

    // let z[0:2**(i+1)-1] = expansionProduct(x[0:2**i−1], y[0:2**(i+1)−1], 2**(i+1));
    // i === 0 => let z[0:1] = expansionProduct(x[0:0], y[0:1], 2);
    let z = qMultDouble1(x0, y);

    // let x[0:2**(i+1)-1] = z[0:2**(i+1)−1] * 0.5;
    // i === 0 => let x[0:1] = z[0:1] / 2;
    let x = eDivBy2(z);

    // --------
    // i === 1
    // --------
    // ... -> left for higher order versions

    return qDivQuad([0,1],x);
    //return x = x0 + . . . + x2_(q−1).
}
*/


// TODO - Implement higher order square roots, e.g. quad to quad, etc.
//function dSqrt2(a: number[]): number[] {
//    // length of output ==== 2**q (e.g. q === 1 for quad precision)
//
//    let x = [1/sqrt(a[0])];
//    for (let i=0; i<1; i++) {
//        //let v[0:2**(i+1)-1] = expansionProduct(x[0:2**i−1], a[0:2**(i+1)−1], 2**(i+1));
//        let v = expansionProduct(x, a);
//        //let w[0:2**(i+1)-1] = expansionProduct(x[0:2**i−1], v[0:2**(i+1)−1], 2**(i+1));
//        let w = expansionProduct(x, v);
//        //let y[0:2**(i+1)-1] = expansionDiff(3, w[0:2**(i+1) − 1], 2**(i+1));
//        let y = growExpansion(negativeOf(w), 3);
//        //let z[0:2**(i+1)-1] = expansionProduct(x[0:2**i−1], y[0:2**(i+1)−1], 2**(i+1));
//        let z = expansionProduct(x, y);
//        //let x[0:2**(i+1)-1] = z[0:2**(i+1)−1] * 0.5;
//        x = eDivBy2(z);
//    }
//
//    return x;
//    //return x = x0 + . . . + x2_(q−1).
//}


export { qSqrt }
//export { dSqrt2 }
