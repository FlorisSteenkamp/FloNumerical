
import { twoSum } from "./two-sum";
import { compress } from "./compress";


/**
 * Returns the result of adding a double to an expansion.
 * 
 * Let e be a nonoverlapping expansion of m p-bit components, and let b be a 
 * p-bit value where p >= 3. Suppose that the components e_1, ..., e_m are 
 * sorted in order of *increasing* magnitude, except that any of the ei may be 
 * zero. 
 * Then the following algorithm will produce a nonoverlapping expansion such 
 * that h = sum_i(h_i) = e + b, where the components h_1, ..., h_(m+1) are also
 * in order of increasing magnitude, except that any of the h_i may be zero. 
 * Furthermore, if e is nonadjacent and round-to-even tiebreaking is used, then 	
 * h is nonadjacent.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param b Another floating point expansion
 */
function growExpansion(e: number[], b: number): number[] {
    let m = e.length;

    let q = b;
    let h: number[] = new Array(m+1);
    for (let i=0; i<m; i++) {
        // Note the use of twoSum and not fastTwoSum.
        [q, h[i]] = twoSum(q, e[i]);
    }
    h[m] = q;

    return compress(h);
}


export { growExpansion }
