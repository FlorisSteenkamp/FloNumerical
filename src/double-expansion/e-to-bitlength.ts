
import { eSign } from "./e-sign";
import { msbExponent } from "../double-representation/msb-exponent";
import { eCompress } from "./e-compress";
import { reduceSignificand } from "../basic/reduce-significand";


/**
 * Returns a floating point expansion accurate to the given number of bits. 
 * Extraneous bits are discarded.
 * @param a a floating point expansion
 * @param l the number of accurate bits to keep
 */
// TODO - make faster
function eToBitlength(
        a: number[], 
        l: number) {

    a = eCompress(a);
    if (eSign(a) === 0) { return [0]; }

    let maxMsb = msbExponent(a[a.length-1]);
    let msb = maxMsb;
    let i=a.length-1; // start at most significant byte
    while (i > 0) {
        let msb_ = msbExponent(a[i-1]);
        if (maxMsb-msb_ > l) {
            break;
        }
        msb = msb_;
        i--;
    }

    let keepBits = Math.min(l - (maxMsb - msb), 53);
    let b = a[i];
    b = reduceSignificand(b, keepBits);

    let result = a.slice(i);
    result[0] = b;

    return result;
}


export { eToBitlength }

