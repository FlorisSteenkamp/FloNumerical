
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoSum } from '../src/two-sum';
import { fastTwoDiff } from '../src/fast-two-diff';


describe('fastTwoSum', function() {
	it('should add two numbers without any error', 
	function() {
		{
			let a = 0.1;
			let b = -0.2;
			expect(fastTwoDiff(a,b)).to.eql([
				0.30000000000000004,
				-2.7755575615628914e-17
			]);
		}

		{ 
			// Note: a < b which breaks the precondition of fastTwoSum
			let a = 0.01;
			let b = 0.21234;
			expect(fastTwoDiff(a,b)).to.eql([
				-0.20234,
				0
			]);

			// Since the precondition is broken these two should differ
			expect(fastTwoDiff(a,b)).not.to.eql(twoSum(a,b));
		}
	});
});