
import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { compare } from '../src/compare';


describe('compare', function() {
	it('should correctly compare some floating point number expansions', 
	function() {
        // 0 === 0
        assert(compare([0], [0]) === 0); 

        assert(compare([1], [0]) > 0); 

        assert(compare([0], [10]) < 0); 

        assert(compare(
            [-2.7755575615628914e-17, 0.30000000000000004], 
            [10]) < 0
        ); 

        assert(compare(
            [-2.7755575615628914e-17, 0.30000000000000004], 
            [0.3]) > 0
        ); 
	});
});
