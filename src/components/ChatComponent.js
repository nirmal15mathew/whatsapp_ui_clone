import Vue from '../lib/vue.js'

const Template = `
 <article class="chat-component">
              <!---The chat component-->
              <aside class="picture-container">
                <figure class="dp" 
                @click="dpViewActive = true">
                  <img class="dp-img" :src="chatData.dp">
                </figure>
              </aside>
              
              <main class="profile-details">
                <label class="profile-name">{{chatData.name}}</label>
                <p class="recent-message">
                  {{chatData.recentChat}}
                </p>
              </main>
              <small class="right-det-area">
               <time class="message-time">{{chatData.lastMessaged}}</time>
              </small>
              <dialog :open="dpViewActive"
              class="dp-viewer">
                <figure class="dp-container"
                  :style="dpImg"
                >
                <h4 class="dp-viewer-title">
                  {{chatData.name}}
                </h4>
                </figure>
                <section class="options">
                  <span class="material-icons" style="font-size: 1.2em;">
                  chat
                  </span>
                  <span class="material-icons" style="font-size: 1.2em;">
                    call
                  </span>
                  <span class="material-icons" style="font-size: 1.2em;">
                  videocam
                  </span>
                  <span class="material-icons" style="font-size: 1.2em;">
                  info
                  </span>
                </section>
              </dialog>
              <div class="background-cover"
              v-if="dpViewActive"
              @click="dpViewActive = false"
              ></div>
            </article>
`
export default Vue.component('chat-component', {
  props: {
    chatData: {
      type: Object,
      required: true
    },
  },
  data: function(){
    return {
      chatSelected: false,
      dpViewActive: false,
      dpImg: {
        backgroundImage: 'url('+this.chatData.dp+')'
      }
    }
  },
  template: Template
})