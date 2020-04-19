
/**
 * Returns the result of multiplying the given double-double by 2.
 * @param q low order double
 * @param Q hight order double
 */
function qMultBy2([q,Q]: number[]) {
    return [2*q,2*Q];
}


export { qMultBy2 }
