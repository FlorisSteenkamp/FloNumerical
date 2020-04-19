/**
 * Returns true if the given floating point expansion is non-adjacent and
 * components of the expansion are ordered in ascending order by absolute value,
 * except that some components may be zero.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf for the
 * definition of adjacency.
 * Implemented for testing purposes.
 * @param x A floating point expansion.
 */
declare function isValid(x: number[]): boolean;
export { isValid };
