import { parser, stringify } from '@/code/parser'
import { expect } from 'chai'

describe('1. parser<===>stringify unit test', () => {
    it('parser function', () => {
        expect(parser('name=zxfpvc')).to.be.deep.equal({ name: 'zxfpvc' });
    })

    it('stringify function', () => {
        expect(stringify({ name: 'zxfpvc' })).to.be.equal('name=zxfpvc');
    })
})