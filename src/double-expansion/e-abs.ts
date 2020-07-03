
import { eSign } from "./e-sign";
import { eNegativeOf } from "./e-negative-of";


/**
 * Returns the absolute value of the given floating point expansion.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param a a floating point number expansion
 */
function eAbs(a: number[]) {
    if (eSign(a) < 0) {
        return eNegativeOf(a);
    }

    return a;
}


export { eAbs }
