

/**
 * Multiply a floating point expansion by -2.
 * * **error free**
 * @param param0 
 */
function eMultByNeg2(e: number[]) {
    let e_: number[] = [];
    for (let i=0; i<e.length; i++) {
        e_.push(-2*e[i]);
    }

    return e_;
}


export { eMultByNeg2 }
