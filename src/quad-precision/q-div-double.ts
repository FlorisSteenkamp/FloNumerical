
import { twoProduct } from "../double-expansion/two-product";
import { fastTwoSum } from "../double-expansion/fast-two-sum";


/**
 * Returns the result of dividing a quad-precision floating point number by a 
 * double.
 * 
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2, 
 * u = 0.5 * Number.EPSILON 
 * * the bound is very sharp
 * 
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param e a quad-precision floating point number
 * @param f a double-precision floating point number
 */
function qDivDouble([xl,xh]: number[], y: number): number[] {
    let th = xh/y;
    let [πl,πh] = twoProduct(th,y);
    let δh = xh - πh;  // exact operation
    let δt = δh - πl;  // exact operation
    let δ = δt + xl;
    let tl = δ/y;

    return fastTwoSum(th,tl);
}


export { qDivDouble }
