"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expansion_product_1 = require("./expansion-product");
const two_product_1 = require("./two-product");
const scale_expansion_1 = require("./scale-expansion");
const two_sum_1 = require("./two-sum");
const grow_expansion_1 = require("./grow-expansion");
const fast_expansion_sum_1 = require("./fast-expansion-sum");
const compress_1 = require("./compress");
/**
 * Return the result of summing an array of terms, each term being an array of
 * floating point expansions to be multiplied together.
 *
 * The result is exact in the form of a non-overlapping floating point
 * expansion.
 * @param terms An array of terms to be summed; A term consists of an
 * array of floating point expansions to be multiplied together.
 */
// The terms parameter were chosen to always be expansions in order to keep the 
// function monomorhic, but whether it's really worth it I am not sure.
function calculate(terms) {
    let total = [0];
    for (let i = 0; i < terms.length; i++) {
        let term = terms[i];
        let product = term[0];
        for (let j = 1; j < term.length; j++) {
            let multiplicant = term[j];
            if (multiplicant.length == 1) {
                if (product.length === 1) {
                    product = two_product_1.twoProduct(product[0], multiplicant[0]);
                }
                else {
                    product = scale_expansion_1.scaleExpansion(product, multiplicant[0]);
                }
            }
            else if (product.length === 1) {
                product = scale_expansion_1.scaleExpansion(multiplicant, product[0]);
            }
            else {
                product = expansion_product_1.expansionProduct(multiplicant, product);
            }
        }
        // add
        if (product.length === 1) {
            if (total.length === 1) {
                total = two_sum_1.twoSum(total[0], product[0]);
            }
            else {
                total = grow_expansion_1.growExpansion(total, product[0]);
            }
        }
        else {
            if (total.length === 1) {
                total = grow_expansion_1.growExpansion(product, total[0]);
            }
            else {
                total = fast_expansion_sum_1.fastExpansionSum(total, product);
            }
        }
    }
    return compress_1.compress(total);
}
exports.calculate = calculate;
//# sourceMappingURL=calculate.js.map