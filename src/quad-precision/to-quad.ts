
import { compress } from "../double-expansion/compress";


/**
 * Returns the result of converting a floating point expansion to a 
 * double-double (quad).
 */
function toQuad(e: number[]) {
     e = compress(e);

    let len = e.length;
    if (len === 2) {
        return e; // already a quad
    } else if (len === 1) {
        return [0,e[0]];
    } else {
        return [e[len-2],e[len-1]];
    }
}


export { toQuad }
