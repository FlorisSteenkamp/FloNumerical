
import { expect } from 'chai';
import { describe } from 'mocha';

import { toBitlength } from '../../src/double-expansion/to-bit-length';
import { significand } from '../../src/double-representation/significand';
import { parseDoubleDetailed } from '../../src/double-representation/parse-double';
import { compress } from '../../src/double-expansion/compress';


function transform(a: number[]) {
    let str = '';
    let s = '';
    for (let i=a.length-1; i >= 0; i--) {
        str += s + '1' + parseDoubleDetailed(a[i]).significand;
        s = ' ';
    }

    return str;
}

describe('to bit length', function() {
	it('should set bit length correctly', 
	function() {
        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 56);
            //console.log(transform(a));
            //console.log(transform(res));
            //console.log(a, res);
            expect(res).to.eql([-8.526512829121202e-14, 1341.0000297837585]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 55);
            expect(res).to.eql([-1.1368683772161603e-13, 1341.0000297837585]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 54);
            expect(res).to.eql([-1.1368683772161603e-13, 1341.0000297837585]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 54);
            expect(res).to.eql([-1.1368683772161603e-13, 1341.0000297837585]);
        }
        
        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 53);
            expect(res).to.eql([1341.0000297837585]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 32);
            expect(res).to.eql([1341.0000295639038]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 28);
            expect(res).to.eql([1341.0000305175781]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 25);
            expect(res).to.eql([1341]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 26);
            expect(res).to.eql([1341.0000305175781]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 10);
            expect(res).to.eql([1342]);
        }

        {
            let a = compress([134134123111*(2**-52), 1341]);
            let res = toBitlength(a, 4);
            expect(res).to.eql([1280]);
        }
        
        {
            let a = [1341];
            let res = toBitlength(a, 4);
            expect(res).to.eql([1280]);
        }

        {
            let a = [134134123111*(2**-52), 1341];
            let res = toBitlength(a, 4);
            expect(res).to.eql([1280]);
        }
	});
});
