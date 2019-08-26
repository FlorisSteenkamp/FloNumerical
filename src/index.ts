
import { compress } from './compress';
import { estimate } from './estimate';
import { expansionDiff } from './expansion-diff';
import { fastExpansionSum } from './fast-expansion-sum';
import { fastTwoDiff } from './fast-two-diff';
import { fastTwoSum } from './fast-two-sum';
import { growExpansion } from './grow-expansion';
import { isAdjacent } from './is-adjacent';
import { isOverlapping, isNonOverlapping, isNonOverlappingAll } from './is-overlapping';
import { merge } from './merge';
import { negativeOf } from './negative-of';
import { orient2d } from './orient2d';
import { scaleExpansion } from './scale-expansion';
import { split } from './split';
import { twoDiff } from './two-diff';
import { twoProduct } from './two-product';
import { twoSum } from './two-sum';
import { reduceSignificand } from './reduce-significand';
import { expansionProduct } from './expansion-product';
import { parseDouble, parseDoubleDetailed } from './representation/parse-double';
import { isBitAligned } from './representation/is-bit-aligned';
import { msbExponent } from './representation/msb-exponent';
import { lsbExponent } from './representation/lsb-exponent';
import { sign } from './sign';
import { bitLength } from './representation/bit-length';
import { calculate } from './calculate';
import { calculateSum } from './calculate-sum';
import { exponent } from './representation/exponent';
import { significand } from './representation/significand';
import { binaryStringToDouble } from './representation/binary-string-to-double';
import { doubleToBinaryString } from './representation/double-to-binary-string';
import { doubleToOctets } from './representation/double-to-octets';
import { octetsToDouble } from './representation/octets-to-double';
import { getHighestSetBit, getLowestSetBit } from './representation/get-max-set-bit';
import { isValid } from './representation/is-valid';


export { 
    // core
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
    split,
    twoDiff,
    twoProduct,
	twoSum,
	reduceSignificand,
    expansionProduct,
    sign, exponent, significand,
    
    // high-level
    calculate,
    calculateSum,

    // representation
	parseDouble, parseDoubleDetailed,
	isBitAligned,
	msbExponent,
	lsbExponent,
    bitLength,
    binaryStringToDouble,
    doubleToBinaryString,
    doubleToOctets, octetsToDouble,
    getHighestSetBit, getLowestSetBit,
    isValid
}
