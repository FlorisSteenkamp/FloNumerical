"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eMultBy2 = void 0;
/**
 * Returns the result of multiplying a floating point expansion by 2.
 * * **error free**
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param e
 */
function eMultBy2(e) {
    let e_ = [];
    for (let i = 0; i < e.length; i++) {
        e_.push(2 * e[i]);
    }
    return e_;
}
exports.eMultBy2 = eMultBy2;
//# sourceMappingURL=e-mult-by-2.js.map