import Vue from './lib/vue.js'
import Store from './Store.js'
import all from './Modules.js'
import MainChatSection from './Components/MainChatSection.js'
import FloatingActionButton from './Components/FloatingActionButton.js'
import ChatWindowComponent from './components/ChatWindowComponent.js'

var randomName = all.randomName;
var chatGenerate = all.chatGenerate;
var pic = all.pic;
var idGenerator = all.idGenerator;

// creating function for adding a chat to store
Store.setMutations('add-chat', function(newChat){
  Store.state.activeChats.push(newChat)
})
Store.setState('active-chat', '')
alert('Test')
//Instance of vue
var app = new Vue({
  el: '#app',
  created: function(){
  },
  data: {
    head: 'header',
    activeChats: Store.state.activeChats,
    searchTerm: '',
  },
  methods: {
    addChat: function(){
      // function for adding chat
      Store.mutations['add-chat'](
           {
             name: randomName(),
             dp: 'https://source.unsplash.com/random/800x600/?' + pic(),
             lastMessaged: '19:17',
             recentChat: chatGenerate(3),
             unseenMessages: [],
             id: idGenerator()
           }
        )
    },
    searchHandler: function(data){
      this.searchTerm = data.term
    }
  },
  components: {
    'main-chat-section': MainChatSection,
    'floating-action-button': FloatingActionButton,
  },
  computed: {
    filteredChats: function(){
      return this.activeChats.filter(chat => {
        return chat.name.match(`${this.searchTerm}`)
      })
    }
  },
})

// All debugging tests here
