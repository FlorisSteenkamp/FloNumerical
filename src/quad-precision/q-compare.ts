
import { qDiffQuad } from "./q-diff-quad";


/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 * @param a a double-double
 * @param b another double-double
 */
function qCompare(a: number[], b: number[]) {
    return qDiffQuad(a,b)[1];
}


export { qCompare }
