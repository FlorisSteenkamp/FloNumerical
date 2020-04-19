
import { qMin } from './quad-precision/q-min';
import { qMax } from './quad-precision/q-max';
import { qSqrt } from './double-expansion/e-sqrt';
//import { dSqrt2 } from './double-expansion/e-sqrt';
import { sqrtWithErr } from './double-float-with-err/sqrt-with-err';
import { qAbs } from './quad-precision/q-abs';
import { qAddDouble } from './quad-precision/q-add-double';
import { qAddQuad } from './quad-precision/q-add-quad';
import { qProduct } from './quad-precision/q-product';
import { qSum } from './quad-precision/q-sum';
import { qCompare } from './quad-precision/q-compare';
import { qDiffQuad } from './quad-precision/q-diff-quad';
import { qMultDouble1, qMultDouble2 } from './quad-precision/q-mult-double';
import { qMultBy2 } from './quad-precision/q-mult-by-2';
import { qMultBy4 } from './quad-precision/q-mult-by-4';
import { qDivBy2 } from './quad-precision/q-div-by-2';
import { qMultByNeg2 } from './quad-precision/q-mult-by-neg-2';
import { qMultByNeg4 } from './quad-precision/q-mult-by-neg-4';
import { qMultQuad } from './quad-precision/q-mult-quad';
import { qDivDouble } from './quad-precision/q-div-double';
import { qDivQuad } from './quad-precision/q-div-quad';
import { qNegativeOf } from './quad-precision/q-negative-of';
import { qSign } from './quad-precision/q-sign';
import { toBitlength } from './double-expansion/to-bit-length';
import { expansionDiv } from './double-expansion/expansion-div';
import { compress } from './double-expansion/compress';
import { compare } from './double-expansion/compare';
import { abs } from './double-expansion/abs';
import { estimate } from './double-expansion/estimate';
import { expansionDiff } from './double-expansion/expansion-diff';
import { fastExpansionSum } from './double-expansion/fast-expansion-sum';
import { fastTwoDiff } from './double-expansion/fast-two-diff';
import { fastTwoSum } from './double-expansion/fast-two-sum';
import { growExpansion } from './double-expansion/grow-expansion';
import { isAdjacent } from './double-expansion/is-adjacent';
import { isOverlapping, isNonOverlapping, isNonOverlappingAll } from './double-expansion/is-overlapping';
import { merge } from './double-expansion/merge';
import { negativeOf } from './double-expansion/negative-of';
import { orient2d } from './double-expansion/orient2d';
import { scaleExpansion, scaleExpansion2 } from './double-expansion/scale-expansion';
import { eMultBy2 } from './double-expansion/e-mult-by-2';
import { eMultByNeg2 } from './double-expansion/e-mult-by-neg-2';
import { eDivBy2 } from './double-expansion/e-div-by-2';
import { split } from './double-expansion/split';
import { twoDiff } from './double-expansion/two-diff';
import { twoProduct } from './double-expansion/two-product';
import { twoSum } from './double-expansion/two-sum';
import { reduceSignificand } from './double-expansion/reduce-significand';
import { expansionProduct } from './double-expansion/expansion-product';
import { parseDouble, parseDoubleDetailed } from './double-representation/parse-double';
import { isBitAligned } from './double-representation/is-bit-aligned';
import { msbExponent } from './double-representation/msb-exponent';
import { lsbExponent } from './double-representation/lsb-exponent';
import { sign } from './double-expansion/sign';
import { bitLength } from './double-representation/bit-length';
import { expBitLength } from './double-representation/bit-length';
import { calculate } from './double-expansion/calculate';
import { calculateSum } from './double-expansion/calculate-sum';
import { calculateProduct } from './double-expansion/calculate-product';
import { exponent } from './double-representation/exponent';
import { significand } from './double-representation/significand';
import { binaryStringToDouble } from './double-representation/binary-string-to-double';
import { doubleToBinaryString } from './double-representation/double-to-binary-string';
import { doubleToOctets } from './double-representation/double-to-octets';
import { octetsToDouble } from './double-representation/octets-to-double';
import { getHighestSetBit, getLowestSetBit } from './double-representation/get-max-set-bit';
import { isValid } from './double-representation/is-valid';
import { within } from './double-expansion/within';
import { intPow } from './double-expansion/int-pow';

import { qDivQuadWithError } from './quad-precision-with-error/q-div-quad-with-err';
import { divWithErr } from './double-float-with-err/div-with-err';
import { toQuad } from './quad-precision/to-quad';


export { 
    // ---- double float ----
    // core
    expansionDiv,
	compress,
    estimate,
    expansionDiff,
    fastExpansionSum,
    fastTwoDiff,
    fastTwoSum,
    growExpansion,
    isAdjacent,
    isOverlapping, isNonOverlapping, isNonOverlappingAll,
    merge,
    negativeOf,
    orient2d,
    scaleExpansion,
    scaleExpansion2,
    eMultBy2,
    eMultByNeg2,
    eDivBy2,
    split,
    twoDiff,
    twoProduct,
	twoSum,
	reduceSignificand,
    expansionProduct,
    sign, exponent, significand,
    compare,
    abs,
    within,
    toBitlength,
    intPow,
    
    // high-level
    calculate,
    calculateSum,
    calculateProduct,

    // representation
	parseDouble, parseDoubleDetailed,
	isBitAligned,
	msbExponent,
	lsbExponent,
    bitLength,
    expBitLength,
    binaryStringToDouble,
    doubleToBinaryString,
    doubleToOctets, octetsToDouble,
    getHighestSetBit, getLowestSetBit,
    isValid,

    // ---- quad precision
    qSqrt,
    toQuad,
    qAbs,
    qAddDouble,
    qAddQuad,
    qProduct,
    qSum,
    qCompare,
    qDiffQuad,
    qMultDouble1, qMultDouble2,
    qMultQuad,
    qDivDouble,
    qDivQuad,
    qNegativeOf,
    qSign,
    qMultBy2,
    qMultBy4,
    qDivBy2,
    qMultByNeg2,
    qMultByNeg4,
    qMin,
    qMax,

    // ---- quad precision error propagation - with error bound on input parameters
    qDivQuadWithError,

    // ---- double precision error propagation - with error bound on input parameters
    divWithErr,
    sqrtWithErr,
}
