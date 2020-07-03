
import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { growExpansion } from '../../src/index';
import { isNonOverlappingAll } from '../../src/double-expansion/is-overlapping';
import { isValid } from '../helpers/is-valid';


describe('grow expansion (i.e. a[] + b)', function() {
	it('should add two numbers (via growExpansion) without any error', 
	function() {
		let a = [3.01e-19, 2e-1];
		let b = 4e+1;

		assert(
			isNonOverlappingAll(a), 
			'The first summand should not be an overlapping expansion.'
		);

		let e = growExpansion(a,b);

		assert(
			isValid(e),
			'The result of growExpansion should be a non-overlapping, non-adjacent expansion'
		);

		expect(e).to.eql([
			1.5542254651204993e-31,
			-2.8307677127941493e-15,
			40.2
		]);
	});
});
