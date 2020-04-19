
import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { compress } from '../../src/double-expansion/compress';
import { isNonOverlappingAll } from '../../src/double-expansion/is-overlapping';
import { isValid } from '../../src/double-representation/is-valid';


function check(e: number[], res: number[]) {
    assert(
        isNonOverlappingAll(e),
        'The input should be a non-overlapping expansion.'
    );

    let result = compress(e);

    assert(
        isValid(result),
        'The result should be a non-overlapping, non-adjacent expansion'
    );

    expect(result).to.eql(res);
}


describe('compress', function() {
	it('should correctly compress some floating point number expansions', 
	function() {
        check(
            [1, 2, 4, 8],
            [15]
        );

        check(
            [0, 0, -5.551115123125783e-17, 0.6000000000000001],
            [-5.551115123125783e-17, 0.6000000000000001]
        );

        check(
            [0,3],
            [3]
        );

        check(
            [0, 2e-101, 0, 4.6e-81, 0, 9.12e-61, 0, 1.56e-40, 0, 1.998e-20],
            [2e-101, 4.6e-81, 9.12e-61, 1.56e-40, 1.998e-20]
        );
	});
});
