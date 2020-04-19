
import { sign } from "./sign";
import { negativeOf } from "./negative-of";


/**
 * Returns the absolute value of the given expansion.
 * @param a A floating point number expansion
 */
function abs(a: number[]) {
    if (sign(a) < 0) {
        return negativeOf(a);
    }

    return a;
}


export { abs }
