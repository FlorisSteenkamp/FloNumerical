
import { ddMin } from './double-double/dd-min';
import { ddMax } from './double-double/dd-max';
import { ddSqrt } from './double-double/dd-sqrt';
import { sqrtWithErr } from './double-with-err/sqrt-with-err';
import { ddAbs } from './double-double/dd-abs';
import { ddAddDouble } from './double-double/dd-add-double';
import { ddAddDd } from './double-double/dd-add-dd';
import { ddProduct } from './double-double/dd-product';
import { ddSum } from './double-double/dd-sum';
import { ddCompare } from './double-double/dd-compare';
import { ddDiffDd } from './double-double/dd-diff-dd';
import { ddMultDouble1, ddMultDouble2 } from './double-double/dd-mult-double';
import { ddMultBy2 } from './double-double/dd-mult-by-2';
import { ddMultBy4 } from './double-double/dd-mult-by-4';
import { ddDivBy2 } from './double-double/dd-div-by-2';
import { ddMultByNeg2 } from './double-double/dd-mult-by-neg-2';
import { ddMultByNeg4 } from './double-double/dd-mult-by-neg-4';
import { ddMultDd } from './double-double/dd-mult-dd';
import { ddDivDouble } from './double-double/dd-div-double';
import { ddDivDd } from './double-double/dd-div-dd';
import { ddNegativeOf } from './double-double/dd-negative-of';
import { ddSign } from './double-double/dd-sign';
import { eToBitlength } from './double-expansion/e-to-bitlength';
import { eDiv } from './double-expansion/e-div';
import { eCompress } from './double-expansion/e-compress';
import { eCompare } from './double-expansion/e-compare';
import { eAbs } from './double-expansion/e-abs';
import { eEstimate } from './double-expansion/e-estimate';
import { eDiff } from './double-expansion/e-diff';
import { fastExpansionSum } from './double-expansion/fast-expansion-sum';
import { fastTwoDiff } from './basic/fast-two-diff';
import { fastTwoSum } from './basic/fast-two-sum';
import { growExpansion } from './double-expansion/grow-expansion';
import { eNegativeOf } from './double-expansion/e-negative-of';
import { orient2d } from './geometric-primitives/orient2d';
import { scaleExpansion, scaleExpansion2 } from './double-expansion/scale-expansion';
import { eMultBy2 } from './double-expansion/e-mult-by-2';
import { eMultByNeg2 } from './double-expansion/e-mult-by-neg-2';
import { eDivBy2 } from './double-expansion/e-div-by-2';
import { split } from './basic/split';
import { twoDiff } from './basic/two-diff';
import { twoProduct } from './basic/two-product';
import { twoSum } from './basic/two-sum';
import { reduceSignificand } from './basic/reduce-significand';
import { expansionProduct } from './double-expansion/expansion-product';
import { parseDouble, parseDoubleDetailed } from './double-representation/parse-double';
import { isBitAligned } from './double-representation/is-bit-aligned';
import { msbExponent } from './double-representation/msb-exponent';
import { lsbExponent } from './double-representation/lsb-exponent';
import { eSign } from './double-expansion/e-sign';
import { bitLength } from './double-representation/bit-length';
import { expBitLength } from './double-representation/bit-length';
import { eCalculate } from './double-expansion/e-calculate';
import { eSum } from './double-expansion/e-sum';
import { eProduct } from './double-expansion/e-product';
import { exponent } from './double-representation/exponent';
import { significand } from './double-representation/significand';
import { doubleToBinaryString } from './double-representation/double-to-binary-string';
import { doubleToOctets } from './double-representation/double-to-octets';
import { getHighestSetBit, getLowestSetBit } from './double-representation/get-max-set-bit';
import { eIntPow } from './double-expansion/e-int-pow';
import { ddDivDdWithError } from './double-double-with-error/dd-div-dd-with-error';
import { divWithErr } from './double-with-err/div-with-err';
import { eToDd } from './double-expansion/e-to-double-double';


// Aliases for some functions which names were not changed due to them being
// used extensively in the literature with a particular recognizable name
const eAdd = fastExpansionSum;
const eAddDouble = growExpansion;
const eMult = expansionProduct;
const eMultDouble1 = scaleExpansion;
const eMultDouble2 = scaleExpansion2;


export { 
    //---- basic ----//
    fastTwoDiff,
    fastTwoSum,
    split,
    twoDiff,
    twoProduct,
    twoSum,
    reduceSignificand,

    //---- double-double precision ----//
    ddSqrt,
    ddAbs,
    ddAddDouble,
    ddAddDd,
    ddProduct,
    ddSum,
    ddCompare,
    ddDiffDd,
    ddMultDouble1, 
    ddMultDouble2,
    ddMultDd,
    ddDivDouble,
    ddDivDd,
    ddNegativeOf,
    ddSign,
    ddMultBy2,
    ddMultBy4,
    ddDivBy2,
    ddMultByNeg2,
    ddMultByNeg4,
    ddMin,
    ddMax,

    //---- double floating point expansions ----//
    fastExpansionSum,  eAdd,
    growExpansion,     eAddDouble,
    expansionProduct,  eMult,
    scaleExpansion,    eMultDouble1,
    scaleExpansion2,   eMultDouble2,
    eDiv,
	eCompress,
    eEstimate,
    eDiff,
    eNegativeOf,
    eMultBy2,
    eMultByNeg2,
    eDivBy2,
    eSign,
    eCompare,
    eAbs,
    eToBitlength,
    eIntPow,
    eCalculate,
    eSum,
    eProduct,
    eToDd,

    //---- double floating point representation ----//
    parseDouble, 
    parseDoubleDetailed,
	isBitAligned,
	msbExponent,
	lsbExponent,
    bitLength,
    expBitLength,
    doubleToBinaryString,
    doubleToOctets, 
    getHighestSetBit, 
    getLowestSetBit,
    exponent, 
    significand,

    //---- double-double precision error propagation - with error bound on input parameters
    ddDivDdWithError,

    //---- double precision error propagation - with error bound on input parameters
    divWithErr,
    sqrtWithErr,

    //---- geometric primitives ----//
    orient2d
}
