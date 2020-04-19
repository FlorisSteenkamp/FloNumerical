
import { estimate } from "./estimate";
import { expansionProduct } from "..";
import { expansionDiff } from "./expansion-diff";
import { toBitlength } from "./to-bit-length";
//import { compare } from "./compare";
import { expBitLength } from "../double-representation/bit-length";


/**
 * Returns the result of a/b using Goldschmidt division. 
 * 
 * The result will only be exact if b|a, i.e. if b divides a, else the result
 * will be rounded to the longest bitlength between a and b.
 * @param a the numerator
 * @param b the denominator
 * @param expansionLength the bitlength/53 of the final result, e.g. 1 means
 * standard double precision, 2 means quad, etc up to a max of about 20 at
 * which point underflow cease precision improvement. If the division is known
 * to be exact beforehand (such as in the pseudo remainder sequence algorithm) 
 * then set expansionLength === 0 and an exact division will be done.
 */
// TODO - test this function properly or replace with a better one
function expansionDiv(N: number[], D: number[], expansionLength: number) {
    let D_ = D;
    let N_ = N;
    let exact = false;
    let resultBitlengthUpperBound = 0;
    if (!expansionLength) {
        // TODO
        //let expN = exponent(N_[N_.length-1]) - exponent(N_[0]) + 53;
        //let expD = exponent(D_[D_.length-1]) - exponent(D_[0]) + 53;
        //expansionLength = Math.max(N.length, D.length);
        //console.log(exponent(N[0]));
        //expansionLength = Math.max(expN, expD) / 53;
        //console.log(expansionLength);
        let bitlengthN = expBitLength(N_);
        let bitlengthD = expBitLength(D_);
        resultBitlengthUpperBound = bitlengthN - bitlengthD + 1;
        //let resultBitlengthLowerBound = resultBitlengthUpperBound - 1; // <= true
        expansionLength = (resultBitlengthUpperBound / 53) + 1;
        //console.log('expansionLength', expansionLength);
        //console.log('bitlengthN', bitlengthN);
        //console.log('bitlengthD', bitlengthD);
        //console.log('resultBitlengthUpperBound', resultBitlengthUpperBound)
        exact = true;
    }
    let F = [1/estimate(D_)]; // Initial guess - out by 1/2 upls
    let i = 1;
    //console.log('D ', estimate(D));
    //console.log('F ', estimate(F));
    //console.log('N ', N_);
    //console.log('D ', D_);
    //console.log('F ', F);
    //console.log('---------');
    while (true) {
        N_ = expansionProduct(N_, F);
        //console.log('N ', N_);

        // The precision bitlength doubles on each iteration
        if (i > expansionLength) {
            // we now have roughly double the needed precision - we actually 
            // only require about the precision and then round properly - this
            // could be implemented in the future.
            if (exact) {
                // We must throw away bits known to be zero. 
                // Any bits > expansionLength * 53 must be thrown away as they
                // are wrong - all other bits are exact.
                N_ = toBitlength(N_, resultBitlengthUpperBound);
                // TODO - below is just for testing - remove later
                //if (compare(expansionProduct(D, N_), N) !== 0) {
                //    console.log(expansionProduct(D, N_))
                //    throw new Error(`division in-exact - probably due to underflow, N: ${N}, D: ${D}, Result: ${N_}, product: ${expansionProduct(D, N_)}`); 
                //} 
                return N_;
            }

            // Returning only significant bits helps with sign determination later on.
            return N_.slice(N_.length - expansionLength, N_.length);
        }

        D_ = expansionProduct(D_, F);
        //console.log('D ', estimate(D));
        //console.log('D ', D_);
        
        F = expansionDiff([2], D_);
        //console.log('F ', estimate(F));
        //console.log('F ', F);
        
        i *= 2;
    }
}


// TODO - remove - for testing only
/*
function transform(a: number[]) {
    let str = '';
    let s = '';
    for (let i=a.length-1; i >= 0; i--) {
        let det = parseDoubleDetailed(a[i]);
        let det_ = parseDouble(a[i]);
        str += s + ' ' + '1' + det.significand;
        str += ' ' +  det_.exponent;
        s = ' ';
    }

    return str;
}
*/

export { expansionDiv }
