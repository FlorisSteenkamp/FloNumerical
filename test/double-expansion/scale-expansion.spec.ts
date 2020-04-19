
import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { scaleExpansion } from '../../src/double-expansion/scale-expansion';
import { isNonOverlappingAll } from '../../src/double-expansion/is-overlapping';
import { isValid } from '../../src/double-representation/is-valid';


describe('scaleExpansion (i.e. a[] * b)', function() {
	it('should scale an expansion without any round-off error', 
	function() {
		let e = [3.01e-19, 2e-1];
		let b = 0.4e+1;

		assert(
			isNonOverlappingAll(e), 
			'The first multiplicant should not be an overlapping expansion.'
		);

		let r = scaleExpansion(e,b);

		assert(
			isValid(r),
			'The result of scaleExpansion should be a non-adjacent expansion'
		);

		expect(r).to.eql([
			1.204e-18,
			0.8
		]);
	});
});
