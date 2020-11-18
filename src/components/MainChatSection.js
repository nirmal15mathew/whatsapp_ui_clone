import Vue from '../lib/vue.js'
import ChatHeader from './ChatHeader.js'
import ChatComponent from './ChatComponent.js'

const Template = `
<section class="main-chat-section">
      <!--- Main Chat List Section -->
      <chat-header @searchTerm="searchHandler"></chat-header>
      <main class="chat-list-container">
        <!---Main Chat List Area-->
        <ul class="chat-list">
          <!---Chat List-->
          <li class="chat-component-container" v-for="(chat, i) in activeChats" :key="i">
            <!--- Container for chat component-->
            <chat-component :chat-data="chat"></chat-component>
          </li>
        </ul>
      </main>
    </section>
`

export default Vue.component('main-chat-section', {
  props: {
    activeChats:{
      type: Array,
      required: true
    },
  },
  data: function(){
    return {
      
    }
  },
  template: Template,
  components: {
    'chat-header': ChatHeader,
    'chat-component': ChatComponent
  },
  methods: {
    searchHandler: function(data) {
      this.$emit('search-term', data)
    }
  }
})