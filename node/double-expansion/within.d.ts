/**
 * Returns true if the second given value is within the first value by the given
 * number of ulps, false otherwise
 */
declare function within(exactValue: number, estimate: number, ulps: number): boolean;
export { within };
