
/**
 * See Shewchuk https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * 
 * Theorem 23 (Shewchuck): Let e = sum_(i=1)^m(e_i) be a nonoverlapping 
 * expansion of m p-bit components, where m >= 3. Suppose that the components of
 * e are sorted in order of increasing magnitude, except that any of the e_i may
 * be zero. Then the following algorithm will produce a nonoverlapping expansion 	
 * (nonadjacent if round-to even tiebreaking is used) such that 
 * h = sum_(i=1)^n(h_i) = e, where the components h_i are in order of increasing
 * magnitude. If h != 0, none of the h_i will be zero. Furthermore, the largest 
 * component h_n approximates h with an error smaller than ulp(h_n).
 */
function compress(e: number[]) {
    let e_ = e.slice();
    let m = e_.length;

    if (e_.length === 1) { return e_; }

    let Q = e_[e_.length-1];
    let bottom = m;
    for(let i=m-2; i>=0; --i) {
        let a = Q
        let b = e_[i]
        Q = a + b
        let bv = Q - a
        let q = b - bv
        if (q) {
            e_[--bottom] = Q;
            Q = q;
        }
    }

    let top = 0
    for(let i=bottom; i<m; ++i) {
        let a = e_[i]
        let b = Q
        Q = a + b
        let bv = Q - a
        let q = b - bv
        if(q) {
            e_[top++] = q
        }
    }

    e_[top++] = Q;
    e_.length = top;

    if (e_.length === 0) { return [0]; }

    return e_;
}


export { compress }
