
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoDiff } from '../src/two-diff';


it('should subtract two numbers without any error', 
function() {
    let a = 0.1;
    let b = -0.2;
    expect(twoDiff(a,b)).to.eql([
        -2.7755575615628914e-17,
        0.30000000000000004
    ]);
});