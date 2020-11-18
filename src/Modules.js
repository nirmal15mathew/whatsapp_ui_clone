// Random user name generator
function randomName(){
  // List of first names
  let firstNames = ['Jeff', 'Thomas', 'Elizabeth', 'Alice', 'Mathew', 'Matt', 'Tom', 'Susan', 'Ninan', 'Jacob', 'Niya', 'Anu','Mariyam',]
  
  //list of last names
  let lastNames = [...firstNames, 'Whitman', 'Walker', 'Houseman']
  let result = ''
  
  //adding the first name 
  result = result + firstNames[Math.round(randomNumber(0, firstNames.length - 1))]
  
  //adding the second name
  result = result + ' ' + lastNames[Math.round(randomNumber(0, lastNames.length - 1))]
  
  return result
}

//Random number generator
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min
}
//Random chat generator
function chatGenerate(words){
  let result = ''
  let dict = ['Ok', 'Goodbye', 'Goodmorning', 'How are you?', 'Fine', 'Doing well', 'Nice', 'wassup', 'Can', 'shopping', 'alright', 'Omg', 'Idk', 'Lol', 'lmao'] //list of words in chat
  for (let i = 0;i < words;i++) {
    //attaching words
    result = result + dict[Math.round(randomNumber(0, dict.length - 1))]
    result = result + ' '
    //choosing a random word
  }
  return result
}

//random pic words
function pic() {
  let pics = ['nature', 'snow', 'face', 'minimal', 'color', 'nation', 'fashion', 'clothing', 'social', 'tech', 'science', 'faces', 'doodle' ,'sport', 'automotive', 'mountain', 'waterfall', 'minimal', 'greenery', 'forest', 'model']
  let img = pics[Math.round(randomNumber(0, pics.length - 1))]
  return img
}

/* This id generator should create a unique string every time which would be assigned to each chats */
//     o[privateName] = 'bar'
function idGenerator() {
  return Math.random().toString(36).substr(2, 9);
};
export default {
  randomName: randomName,
  randomNumber: randomNumber,
  chatGenerate: chatGenerate,
  pic: pic,
  idGenerator: idGenerator,
}