/**
 * Returns the result of the given floating point expansion rounded to a single
 * floating point number.
 *
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e A floating point expansion
 */
declare function estimate(e: number[]): number;
export { estimate };
