
import { twoProduct } from '../basic/two-product';
import { twoSum } from '../basic/two-sum';
import { fastTwoSum } from '../basic/fast-two-sum';
import { eCompress } from './e-compress';


/**
 * Returns the result of multiplying an expansion by a double.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion 
 * of m p-bit components, and let b be a p-bit value where p >= 4. Suppose that 
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a 
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the 
 * components of h are also in order of increasing magnitude, except that any of 
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even 
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param e a double floating point expansion
 * @param b a double
 */
function scaleExpansion(e: number[], b: number): number[] {
    let m = e.length;

    let h: number[] = new Array(2*m);
    let q: number;
    let q_: number;

    [h[0], q] = twoProduct(e[0], b);
    for (let i=1; i<m; i++) {
        let [t, T] = twoProduct(e[i], b);
        [h[2*i-1], q_] = twoSum(q, t);
        [h[2*i  ], q] = fastTwoSum(T, q_);
    }

    h[2*m - 1] = q;

    return eCompress(h);
}


/**
 * Returns the result of multiplying an expansion by a double.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion 
 * of m p-bit components, and let b be a p-bit value where p >= 4. Suppose that 
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a 
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the 
 * components of h are also in order of increasing magnitude, except that any of 
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even 
 * tiebreaking is used, then h is non-adjacent.
 *
 * @param b a double
 * @param e a double floating point expansion
 */
function scaleExpansion2(b: number, e: number[]): number[] {
    let m = e.length;

    let h: number[] = new Array(2*m);
    let q: number;
    let q_: number;

    [h[0], q] = twoProduct(e[0], b);
    for (let i=1; i<m; i++) {
        let [t, T] = twoProduct(e[i], b);
        [h[2*i-1], q_] = twoSum(q, t);
        [h[2*i  ], q] = fastTwoSum(T, q_);
    }

    h[2*m - 1] = q;

    return eCompress(h);
}


export { scaleExpansion, scaleExpansion2 }
