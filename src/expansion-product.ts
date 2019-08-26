
import { fastExpansionSum } from "./fast-expansion-sum";
import { scaleExpansion } from "./scale-expansion";
import { compress } from "./compress";


/**
 * Returns the product of two expansions.
 * 
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * 
 * Ase per Shewchuk in the above paper: "To find the product of two expansions
 * e and f, use SCALE-EXPANSION (with zero elimination) to form the expansions
 * ef_1, ef_2, ..., then sum these using a distillation tree."
 * 
 * A distillation tree used with fastExpansionSum will give use O(k*log k) vs 
 * O(k^2) operations.
 * 
 * TODO - currently implemented naively and not as described above (i.e. the 
 * algorithm takes O(k^2) operations).
 * @param e An expansion
 * @param f Another expansion
 */
function expansionProduct(
        e: number[], 
        f: number[]): number[] {

    let sum = [0];
    for (let i=0; i<e.length; i++) {
        sum = fastExpansionSum(sum,  scaleExpansion(f, e[i]));
    }

    return compress(sum);
}


export { expansionProduct }
