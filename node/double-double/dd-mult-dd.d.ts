/**
 * Returns the product of two double-double-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low order double (of x in x*y)
 * @param xh hight order double (of x in x*y)
 * @param yl low order double (of y in x*y)
 * @param yh hight order double (of y in x*y)
 */
declare function ddMultDd([xl, xh]: number[], [yl, yh]: number[]): number[];
export { ddMultDd };
