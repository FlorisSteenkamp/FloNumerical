
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoSum } from '../../src/double-expansion/two-sum';


describe('play', function() {
	it('play', 
	function() {
		let a = 0.1;
        let b = 0.2;
        let res = twoSum(a,b);
        let res_ = [
			-2.7755575615628914e-17,
			0.30000000000000004
		];
		expect(res).to.eql(res_);
	});
});