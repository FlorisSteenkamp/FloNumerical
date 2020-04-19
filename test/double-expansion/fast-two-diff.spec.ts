
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoSum } from '../../src/double-expansion/two-sum';
import { fastTwoDiff } from '../../src/double-expansion/fast-two-diff';


describe('fastTwoDiff', function() {
	it('should take the difference between two numbers without any error', 
	function() {
		{
			let a = 0.1;
			let b = -0.2;
			expect(fastTwoDiff(a,b)).to.eql([
				-2.7755575615628914e-17,
				0.30000000000000004
			]);
		}

		{ 
			// Note: a < b which breaks the precondition of fastTwoSum
			let a = 0.01;
			let b = 0.21234;
			expect(fastTwoDiff(a,b)).to.eql([
				0,
				-0.20234
			]);

			// Since the precondition is broken these two should differ
			expect(fastTwoDiff(a,b)).not.to.eql(twoSum(a,b));
		}
	});
});