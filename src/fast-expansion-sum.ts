
import { merge } from "./merge";
import { fastTwoSum } from "./fast-two-sum";
import { twoSum } from "./two-sum";
import { compress } from "./compress";


/**
 * Returns the result of adding two expansions. This function is nearly always
 * preferred above expansionSum.
 * 
 * Theorem 13: Let e = sum_(i=1)^m(e_i) and f = sum_(i=1)^n(f_i) be strongly 
 * nonoverlapping expansions of m and n p-bit components, respectively, where 
 * p >= 4. Suppose that the components of both e and f are sorted in order of
 * increasing magnitude, except that any of the e_i or f_i may be zero. On a 
 * machine whose arithmetic uses the round-to-even rule, the following algorithm 
 * will produce a strongly nonoverlapping expansion h such that 
 * sum_(i=1)^(m+n)(e_i + f_i) = e + f, where the components of h are also in 
 * order of increasing magnitude, except that any of the h_i may be zero.
 * 
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastExpansionSum(e: number[], f: number[]) {
    let g = merge(e,f);

    if (g.length === 1) { return g; }

    let len = g.length;
    let h = new Array(len);
    let q: number;
    [h[0], q] = fastTwoSum(g[1], g[0]);
    for (let i=2; i<len; i++) {
        [h[i-1], q] = twoSum(q, g[i]);
    }
    h[len-1] = q;

    return compress(h);
}


export { fastExpansionSum }
