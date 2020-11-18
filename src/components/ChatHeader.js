import Vue from '../lib/vue.js'
import Store from '../Store.js'
const Template = `
  <header class="chat-list-header" :class="{'search-mode': searchActive}">
            <!-- Chat List Header-->
            <div class="area-top">
              <figure class="logo-container">
                <!---Main Top section-->
                <h3 class="logo">WhatsApp</h3>
              </figure>
              <button class="header-action-button search-button" @click="enableSearch">
                <span class="material-icons">
                  search
                </span>
              </button>
            </div>
            
            <div class="tabs-container">
              <!--- Different Tabs Container-->
              <ul class="tabs-list">
                <!---List of tabs-->
                <li class="tab-item is-active">CHATS</li>
                <li class="tab-item">STATUS</li>
                <li class="tab-item">CALLS</li>
              </ul>
              <!---The active border to show active tab-->
              
            </div>
            <div class="search-bar" :class="{'is-active':searchActive}">
              <button class="back-button" @click="disableSearch">
                <span class="material-icons">
                  arrow_back
                </span>
              </button>
              <input class="search-bar-input" type="text" 
              :disabled="!searchActive"
              placeholder="Search..."
              autofocus
              @input="searchHandler"
              >
            </div>
          </header>
`

export default Vue.component('chat-header',{
  data: function(){
    return {
      searchActive: false,
    }
  },
  methods: {
    enableSearch: function(){
      Store.setState('search-state', true)
      this.searchActive = true
    },
    disableSearch: function(){
      Store.setState('search-state', false)
      this.searchActive = false
      
      let dupeEvent = {
        target: {
          value: ''
        }
      }
      this.searchHandler(dupeEvent)
    },
    searchHandler: function(e){
      let data = {
        term: e.target.value
      }
      this.$emit('searchTerm', data)
    },
  },
  template: Template
})