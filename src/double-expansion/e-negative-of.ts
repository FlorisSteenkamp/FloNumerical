
/**
 * Returns the negative of the given floating point expansion.
 * @param e A floating point number expansion
 */
function eNegativeOf(e: number[]): number[] {
    let m = e.length;
    let h = new Array(m);

    for (let i=0; i<m; i++) {
        h[i] = -e[i];
    }

    return h;
}


export { eNegativeOf }
