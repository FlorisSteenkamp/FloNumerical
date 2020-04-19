/**
 * Returns the result of merging an expansion e and f into a single expansion,
 * in order of nondecreasing magnitude (possibly with interspersed zeros).
 * (This function is zero-eliminating)
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param f Another floating point expansion
 */
declare function merge(e: number[], f: number[]): number[];
export { merge };
