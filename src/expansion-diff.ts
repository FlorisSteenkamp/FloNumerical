
import { fastExpansionSum } from "./fast-expansion-sum";
import { negativeOf } from "./negative-of";


/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 * 
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param f Another floating point expansion
 */
function expansionDiff(e: number[], f: number[]) {
    let g = negativeOf(f);
    return fastExpansionSum(e, g);
}


export { expansionDiff }
