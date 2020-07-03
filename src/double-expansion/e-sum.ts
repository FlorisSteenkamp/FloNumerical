
import { twoSum } from "../basic/two-sum";
import { growExpansion } from "./grow-expansion";
import { fastExpansionSum } from "./fast-expansion-sum";


/**
 * Returns the result of summing an array of floating point expansions.
 * 
 * * The result is exact in the form of a non-overlapping floating point 
 * expansion.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param terms An array of numbers to be summed; A term is represented by a 
 * floating point expansion.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function eSum(terms: number[][]) {
    let total = [0];
    for (let i=0; i<terms.length; i++) {
        let term = terms[i];

        // add
        if (term.length === 1) {
            if (total.length === 1) {
                total = twoSum(total[0], term[0]);
            } else {
                total = growExpansion(total, term[0]);
            }
        } else {
            if (total.length === 1) {
                total = growExpansion(term, total[0]);
            } else {
                total = fastExpansionSum(total, term);
            }
        }
    }

    return total;
}


export { eSum }
