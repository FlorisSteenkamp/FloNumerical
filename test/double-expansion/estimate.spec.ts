
import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { estimate } from '../../src/double-expansion/estimate';


describe('estimate', function() {
	it('should estimate a value correctly from an expansion',
	function() {
        // zero should equal 0
        expect(estimate([1,2,3,4])).to.eql(10);
	});
});



