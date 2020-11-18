/* The object to store the global states and function to mutate them */

const store = {
  state: {
    activeChats: [
      {
        name: 'Nirmal',
        dp: 'assets/users/avatar.jpeg',
        lastMessaged: '19:00',
        recentChat: 'Lol. Ok lorem ipsum dolor sit amet',
        unseenMessages: [],
      },
      ]
  },
  setState: function(key, value){
    this.state[key] = value
  },
  mutations: {},
  setMutations: function(name, callBack){
    this.mutations[name] = callBack
  }
}
export default store