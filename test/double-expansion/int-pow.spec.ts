
import { expect } from 'chai';
import { describe } from 'mocha';

import { intPow } from '../../src/double-expansion/int-pow';

describe('multiply', function() {
	it('should multiply two numbers without any error', 
	function() {
		{
			let a = [2];
			expect(intPow(a,8)).to.eql([
				256
			]);
		}
	});
});