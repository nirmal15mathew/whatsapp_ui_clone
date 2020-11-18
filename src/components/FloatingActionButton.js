import Vue from '../lib/vue.js'

const Template = `
 <button class="floating-action-button" @click="clicked">
      <slot></slot>
 </button>
`
export default Vue.component('floating-action-button', {
  props: {
    clickEvent: {
      type: Function
    }
  },
  data: function(){
    return {
    }
  },
  methods: {
    clicked: function(){
      this.clickEvent()
    }
  },
  template : Template
})