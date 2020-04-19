
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

import { octetsToDouble } from "./octets-to-double";


/**
 * @param str 
 */
function binaryStringToDouble(str: string) {
    return octetsToDouble(str.match(/.{8}/g)!.map(binaryStringToInt));
}


/**
 * e.g. "10001000" -> 136
 */
function binaryStringToInt(b: string) {
    return parseInt(b, 2);
}


export { binaryStringToDouble }
