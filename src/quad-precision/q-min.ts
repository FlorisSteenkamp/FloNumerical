
import { qDiffQuad } from "./q-diff-quad";


/**
 * Returns the minimum of a and b.
 * @param a a double-double
 * @param b another double-double
 */
function qMin(a: number[], b: number[]) {
    let res = qDiffQuad(a,b)[1];

    return res > 0 ? b : a;
}


export { qMin }
