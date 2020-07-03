
import { expansionProduct } from "./expansion-product";
import { twoProduct } from "../basic/two-product";
import { scaleExpansion } from "./scale-expansion";
import { eCompress } from "./e-compress";


/**
 * Return the result of multiplying together an array of floating point 
 * expansions.
 * 
 * * The result is exact in the form of a non-overlapping floating point 
 * expansion.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param terms an array of multiplicands
 */
function eProduct(term: number[][]) {
    let product = term[0];
    for (let j=1; j<term.length; j++) {
        let multiplicant = term[j];
        if (multiplicant.length == 1) {
            if (product.length === 1) {
                product = twoProduct(product[0], multiplicant[0]);
            } else {
                product = scaleExpansion(product, multiplicant[0]);
            }
        } else if (product.length === 1) {
            product = scaleExpansion(multiplicant, product[0]);
        } else {
            product = expansionProduct(multiplicant, product);
        }
    }

    return eCompress(product);
}


export { eProduct }
