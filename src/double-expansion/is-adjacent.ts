
import { isOverlapping } from "./is-overlapping";


/**
 * Returns true if x and y is adjacent, false otherwise.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param x A double floating point number
 * @param y Another double floating point number
 */
function isAdjacent(x: number, y: number) {
    return isOverlapping(x,y) || 
           isOverlapping(x,2*y) || 
           isOverlapping(2*x,y);
}


export { isAdjacent }
