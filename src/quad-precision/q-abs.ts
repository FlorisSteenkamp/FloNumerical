
/**
 * Returns the absolute value of the given quad precision floating point number.
 * @param a A quad precision floating point number
 */
function qAbs(f: number[]) {
    let [q,Q] = f;
    
    return (Q < 0) ? [-q,-Q] : f;
}


export { qAbs }
