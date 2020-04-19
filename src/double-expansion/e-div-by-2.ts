

/**
 * Divide a floating point expansion by 2.
 * * **error free**
 * @param e
 */
function eDivBy2(e: number[]) {
    let e_: number[] = [];
    for (let i=0; i<e.length; i++) {
        e_.push(0.5*e[i]);
    }

    return e_;
}


export { eDivBy2 }
