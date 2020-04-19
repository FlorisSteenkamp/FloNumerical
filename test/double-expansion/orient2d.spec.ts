
import { expect, assert } from 'chai';
import { describe } from 'mocha';

import { orient2d } from '../../src/double-expansion/orient2d';
import { orient2dExact } from '../../src/double-expansion/orient2d-exact';


function check(orientation: 'clockwise' | 'anti-clockwise' | 'straight') {
    return (
            p1: number[], 
            p2: number[], 
            p3: number[]) => {

        let r = orient2d(p1, p2, p3);

        let psStr = `expected orient2d( [${p1[0]},${p1[1]}],[${p2[0]},${p2[1]}],[${p3[0]},${p3[1]}] )`;
        if (orientation === 'straight') {
            assert(r === 0, psStr + ' === 0');
        } else if (orientation === 'anti-clockwise') {
            assert(r > 0, psStr + ' > 0');
        } else if (orientation === 'clockwise') {
            assert(r < 0, psStr + ' < 0');
        }

        let r1 = orient2dExact(p1,p2,p3);
        let r2 = orient2d     (p1,p2,p3);

        assert(
            Math.sign(r1) === Math.sign(r2),
            'orient2d and orient2dExact must return the same sign'
        );
    }
}


let straight = check('straight');
let clockwise = check('clockwise');
let antiClockwise = check('anti-clockwise');


describe('orient2d', function() {
    it('should calculate orient2d correctly for some cases', 
    function() {
        antiClockwise(
            [0, 0], 
            [1e-64, 0], 
            [0, 1]
        );

        straight(
            [0,   0],
            [.1, .1], 
            [.1, .1]
        );

        straight(
            [0.1,0.1], 
            [0.1,0.1], 
            [0.1,0.1]
        );

        straight(
            [0.1,0.2], 
            [0.1,0.2], 
            [0,0]
        );
    });

    it('branch 1 - anti-clockwise', 
    function() {
        antiClockwise(
            [0,0],
            [1,0],
            [1,1]
        );

        antiClockwise(
            [0,0],
            [-1,0],
            [-1,-1]
        );
    });


	it('branch 2 - clockwise', 
	function() {
        clockwise(
            [0,0],
            [-1,0],
            [-1,1]
        );        
    });
    
    it('branch 3 - anti-clockwise, clockwise or straight', 
	function() {
        antiClockwise(
            [0,1e-200],
            [1,0],
            [2,0]
        );

        antiClockwise(
            [0,1e+200],
            [1,0],
            [2,0]
        );

        clockwise(
            [0,0],
            [1,1e-200],
            [2,1e-200]
        );

        clockwise(
            [0,0],
            [1,1e+200],
            [2,1e+200]
        );

        straight(
            [0,0], 
            [1,0],
            [3,0]
        );
    });
    
    it('branch 4 - anti-clockwise or clockwise', 
	function() {
        antiClockwise(
            [0,0],
            [1,1],
            [2-2e-14,2]
        );

        clockwise(
            [0,0],
            [1,1],
            [2+3e-14,2]
        );
    });
    
    it('branch 5 - anti-clockwise, clockwise, straight', 
	function() {
        // TODO - also check if this case checks for anti-clockwise, clockwise, straight
    });
    
    it('branch 6 - straight', 
	function() {
        straight(
            [0,0], 
            [1,1],
            [2,2]
        );
    });
    
    it('branch 7 - anti-clockwise, clockwise, straight', 
	function() {
        // TODO - also check if this case checks for anti-clockwise, clockwise, straight
    });
    
    it('branch 8 - anti-clockwise, clockwise, straight', 
	function() {
        // TODO - also check if this case checks for anti-clockwise, clockwise
        straight(
            [2,2],
            [1e-20,1e-20],
            [1e-21,1e-21]
        );
    });
});