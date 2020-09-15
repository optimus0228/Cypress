import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'

describe('2. HelloWorld.vue UI test', () => {
    it('render new message', () => {
        let Constructor = Vue.extend(HelloWorld)
        let wrapper = new Constructor({
            propsData: { msg: "Hello Jest" }
        }).$mount();

        expect(wrapper.$el.querySelector('h1').innerHTML).to.be.equal("Hello Jest")
    })
})

describe('3. HelloWorld.vue UI test', () => {
    it('render new message', () => {
        let wrapper = mount(HelloWorld, {
            propsData: { msg: "Hello new message" }
        })

        expect(wrapper.find('h1').text()).to.be.equal("Hello new message")
    })
})