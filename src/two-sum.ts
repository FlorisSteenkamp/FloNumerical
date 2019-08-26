
/**
 * Returns the exact result of adding two doubles.
 * 
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the 
 * following algorithm will produce a nonoverlapping expansion x + y such that 
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff 
 * error in the calculation of x.
 * 
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function twoSum(a: number, b: number) {
    let x = a + b;
    let bv = x - a;
    let y = (a - (x-bv)) + (b-bv);

    return [x,y];
}


export { twoSum }
