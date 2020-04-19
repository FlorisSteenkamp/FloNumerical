/**
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 *
 * "The easiest way to compare two expansions is to subtract one from the other,
 * and test the sign of the result. An expansion’s sign can be easily tested
 * because of the nonoverlapping property; simply check the sign of the
 * expansion's most significant nonzero component..."
 */
declare function compare(a: number[], b: number[]): number;
export { compare };
