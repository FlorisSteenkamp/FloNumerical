/**
 * Return the result of summing an array of terms, each term being an array of
 * floating point expansions to be multiplied together.
 *
 * The result is exact in the form of a non-overlapping floating point
 * expansion.
 * @param terms An array of terms to be summed; A term consists of an
 * array of floating point expansions to be multiplied together.
 */
declare function calculate(terms: number[][][]): number[];
export { calculate };
