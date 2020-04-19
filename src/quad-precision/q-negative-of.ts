
/**
 * Returns the negative of the given quad precision floating point number.
 * @param q low order double
 * @param Q high order double
 */
function qNegativeOf([q,Q]: number[]): number[] {
    return [-q,-Q];
}


export { qNegativeOf }
