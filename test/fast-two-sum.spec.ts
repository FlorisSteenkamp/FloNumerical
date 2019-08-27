
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoSum } from '../src/two-sum';
import { fastTwoSum } from '../src/fast-two-sum';


describe('fastTwoSum', function() {
	it('should add two numbers without any error', 
	function() {
		{
			let a = 0.2;
			let b = 0.1;
			expect(fastTwoSum(a,b)).to.eql([
				-2.7755575615628914e-17,
				0.30000000000000004
			]);
		}

		{ 
			// Note: a < b which breaks the precondition of fastTwoSum
			let a = 0.01; // broken precondition
			let b = 0.2;  // ...
			expect(fastTwoSum(a,b)).to.eql([
				0,
				0.21000000000000002
			]);

			// Since the precondition is broken these two should differ
			expect(fastTwoSum(a,b)).not.to.eql(twoSum(a,b));
		}
	});
});