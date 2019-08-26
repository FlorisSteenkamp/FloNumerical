
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)


/**
 * [64, 94, 221, 47, 26, 159, 190, 119] -> 123.456
 */
function octetsToDouble(octets: number[]) {
    var buffer = new ArrayBuffer(8);
    new Uint8Array(buffer).set(octets);
    return new DataView(buffer).getFloat64(0, false);
}


export { octetsToDouble }
