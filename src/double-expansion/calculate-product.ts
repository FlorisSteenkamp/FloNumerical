
import { expansionProduct } from "./expansion-product";
import { twoProduct } from "./two-product";
import { scaleExpansion } from "./scale-expansion";
import { compress } from "./compress";


/**
 * Return the result of multiplying together an array of floating point 
 * expansion numbers.
 * 
 * The result is exact in the form of a non-overlapping floating point 
 * expansion.
 * @param terms an array of multiplicands
 */
function calculateProduct(term: number[][]) {
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

    return compress(product);
}


export { calculateProduct }
