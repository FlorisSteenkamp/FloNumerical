/**
 * Returns the result of multiplying an expansion by a double.
 *
 * Theorem 19 (Shwechuk): Let e = sum_(i=1)^m(e_i) be a nonoverlapping expansion
 * of m p-bit components, and let b be a p-bit value where p >= 4. Suppose that
 * the components of e are sorted in order of increasing magnitude, except that
 * any of the e_i may be zero. Then the following algorithm will produce a
 * nonoverlapping expansion h such that h = sum_(i=1)^(2m)(h_i) = be, where the
 * components of h are also in order of increasing magnitude, except that any of
 * the h_i may be zero. Furthermore, if e is nonadjacent and round-to-even
 * tiebreaking is used, then h is non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param e
 * @param b
 */
declare function scaleExpansion(e: number[], b: number): number[];
export { scaleExpansion };
