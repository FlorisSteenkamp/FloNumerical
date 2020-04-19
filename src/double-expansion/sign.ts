
/**
 * Returns the sign of the given expansion. From Shewchuk: "A nonoverlapping 
 * expansion is desirable because it is easy to determine its sign (take the 
 * sign of the largest component) ... "
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion with zeroes eliminated.
 */
function sign(e: number[]) {
    if (e.length === 0) { 
        return 0; 
    }

    //return Math.sign(e[e.length-1]);
    return e[e.length-1];
}


export { sign }
