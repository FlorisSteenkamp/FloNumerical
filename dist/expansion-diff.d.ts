/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 * @param f Another floating point expansion
 */
declare function expansionDiff(e: number[], f: number[]): number[];
export { expansionDiff };
