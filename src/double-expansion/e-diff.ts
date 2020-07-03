
import { fastExpansionSum } from "./fast-expansion-sum";
import { eNegativeOf } from "./e-negative-of";


/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param e a floating point expansion
 * @param f another floating point expansion
 */
function eDiff(e: number[], f: number[]) {
    let g = eNegativeOf(f);
    return fastExpansionSum(e, g);
}


export { eDiff }
