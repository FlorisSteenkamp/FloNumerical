
/**
 * Returns the result of multiplying the given double-double by 4.
 * @param q low order double
 * @param Q hight order double
 */
function qMultBy4([q,Q]: number[]) {
    return [4*q,4*Q];
}


export { qMultBy4 }
