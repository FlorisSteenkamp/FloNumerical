
import { expansionProduct } from "./expansion-product";
import { twoProduct } from "./two-product";
import { scaleExpansion } from "./scale-expansion";
import { twoSum } from "./two-sum";
import { growExpansion } from "./grow-expansion";
import { fastExpansionSum } from "./fast-expansion-sum";


/**
 * Return the result of summing an array of terms, each term being an array of
 * floating point expansions to be multiplied together.
 * 
 * The result is exact in the form of a non-overlapping floating point 
 * expansion.
 * @param terms An array of terms to be summed; A term consists of an 
 * array of floating point expansions to be multiplied together.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function calculate(terms: number[][][]) {
    let total = [0];
    for (let i=0; i<terms.length; i++) {
        let term = terms[i];
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
                product = scaleExpansion(multiplicant, product[1]);
            } else {
                product = expansionProduct(multiplicant, product);
            }
        }

        // add
        if (product.length === 1) {
            if (total.length === 1) {
                total = twoSum(total[0], product[0]);
            } else {
                total = growExpansion(total, product[0]);
            }
        } else {
            if (total.length === 1) {
                total = growExpansion(product, total[0]);
            } else {
                total = fastExpansionSum(total, product);
            }
        }
    }

    return total;
}


export { calculate }
