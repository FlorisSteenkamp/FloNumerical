
import { eProduct } from "./e-product";
import { expansionProduct } from "./expansion-product";


/**
 * Returns a**i, where i is a non-negative integer.
 * @param a a floating point expansion
 */
// TODO - this algorithm's speed can easily be improved significantly
function eIntPow(a: number[], p: number) {
    // a^0 === 1
    if (p === 0) { return [1]; }
    // a^1 === a
    if (p === 1) { return a; }

    if (p === 2) { 
        return expansionProduct(a,a); 
    }

    let as: number[][] = [];
    for (let i=0; i<p; i++) {
        as.push(a);
    }
    
    return eProduct(as);
}


export { eIntPow }
