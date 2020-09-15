import Counter from '@/components/Counter'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'

describe("4. Counter component unit test", () => {
    it("button exist test", () => {
        let wrapper = mount(Counter);
        expect(wrapper.find('button').exists()).to.be.equal(true)
    })

    it("counter increment", () => {
        let wrapper = mount(Counter);
        expect(wrapper.find('#count').text()).to.be.equal('18');

        wrapper.find("button").trigger('click');
        expect(wrapper.vm.$data.count).to.be.equal(19);
    })
})