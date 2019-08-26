import { twoProduct } from "./two-product";
import { expansionDiff } from "./expansion-diff";
import { twoDiff } from "./two-diff";
import { fastExpansionSum } from "./fast-expansion-sum";
import { scaleExpansion } from "./scale-expansion";
import { compress } from "./compress";


/**
 * Dont use! Only for testing purposes - too slow. Use orien2d instead.
 * @param a 
 * @param b 
 * @param c 
 */
function orient2dExact(a: number[], b: number[], c: number[]) {
    // det := ax(by - cy) - ay(bx - cx) + (bx*cy - by*cx)

    let term1 = scaleExpansion(
        twoDiff(b[1], c[1]),
        a[0]
    );

    let term2 = scaleExpansion(
        twoDiff(b[0], c[0]),
        -a[1]
    );

    let term3 = expansionDiff(
        twoProduct(b[0], c[1]),
        twoProduct(b[1], c[0]),
    );

    let term4 = fastExpansionSum(term2, term3);
    
    let det = fastExpansionSum(
        term1, 
        term4
    );

    det = compress(det);

    return det[det.length - 1];
}


export { orient2dExact }
