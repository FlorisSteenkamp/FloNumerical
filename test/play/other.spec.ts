

import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { estimate } from '../../src/double-expansion/estimate';
import { bitLength } from '../../src/double-representation/bit-length';


describe('playing', function() {
	it('should',
	function() {
        //let x0 = 32752;
        //let x1 = 32752;
        //let x2 = 32752;

        //let x0 = 15;
        //let x1 = 15;
        //let x2 = 15;

        let x0 = 15;
        let x1 = 13;
        let x2 = 12;

        console.log('bitlength: x0', bitLength(x0));
        console.log('bitlength: x1', bitLength(x1));
        console.log('bitlength: x2', bitLength(x2));
        console.log();
        console.log('bitlength: 3*x2', bitLength(3*x2));
        console.log('bitlength: 6*x1', bitLength(6*x1));
        console.log('bitlength: 3*x0', bitLength(3*x0));
        console.log();
        console.log('bitlength: 3*x2 + 6*x1 + 3*x0', bitLength(3*x2 + 6*x1 + 3*x0));
        console.log();
        console.log('3*x2', 3*x2);
        console.log('6*x1', 6*x1);
        console.log('3*x0', 3*x0);
        console.log();
        console.log('3*x2 + 6*x1 + 3*x0', 3*x2 + 6*x1 + 3*x0);
	});
});




