/**
 * Returns true if a and b does not overlap, false otherwise.
 *
 * Two floating-point values x and y are nonoverlapping if the least significant
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * Implemented for testing purposes.
 * @param a A double
 * @param b Another double
 */
declare function isOverlapping(a: number, b: number): boolean;
/**
 * Returns true if a and b overlaps, false otherwise.
 *
 * Two floating-point values x and y are nonoverlapping if the least significant
 * nonzero bit of x is more significant than the most significant nonzero bit of
 * y.
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 *
 * Implemented for testing purposes.
 *
 * @param a A double
 * @param b Another double
 */
declare function isNonOverlapping(a: number, b: number): boolean;
/**
 * Returns true if all components of the given expansion is non-overlapping,
 * false otherwise.
 * @param e An expansion
 */
declare function isNonOverlappingAll(e: number[]): boolean;
export { isOverlapping, isNonOverlapping, isNonOverlappingAll };
