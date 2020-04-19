
import { qDiffQuad } from "./q-diff-quad";


/**
 * Returns the maximum of a and b.
 * @param a a double-double
 * @param b another double-double
 */
function qMax(a: number[], b: number[]) {
    let res = qDiffQuad(a,b)[1];

    return res > 0 ? a : b;
}


export { qMax }
