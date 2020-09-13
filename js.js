var trigger = [
	["hi","hey","hello"], 
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["bye", "good bye", "goodbye", "see you later"]
];
var reply = [
	["Hi","Hey","Hello"], 
	["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a bot", "I am a bot. What are you?"],
	["Sammie Kei", "Sammie Kei"],
	["Efua", "My name is Efua"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Bye", "Goodbye", "See you later"]
];

const usermessage = document.querySelector(".chat-message"); 
var button = document.getElementById('btn');
let chatareaouter = document.querySelectorAll('.chat .self') 
const inputbox = document.getElementById('text1')
const chatlogs = document.querySelector('.chatlogs')




var alternative = ["Haha...", "Eh..."];






button.addEventListener("click", function(){
    

    
            
		 //Enter button
		 
        var input = document.getElementById("text1").value;
       inputbox.value = ""; //clear input value
		createMessage("self",input)
        output(input);
        
	  
});





function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	createMessage("bot", product)
//	speak(product);
	
}

function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}

function createMessage(e, text) {
  // body...
  let message = document.createElement('div');
  message.classList.add('chat');
  message.classList.add(e)
  console.log(e);
  let userPhoto = document.createElement('div');
  userPhoto.classList.add('user-photo');
  let img = document.createElement('img');
  img.src = e+ ".jpg";
  userPhoto.appendChild(img)
  message.appendChild(userPhoto)
  let textBox = document.createElement('p');
  textBox.classList.add('chat-message')
  textBox.id = e+ "message"
  textBox.innerText = text
  console.log(text);
  message.appendChild(textBox);
  /*
  let 
      <div class="chat self" id="output">
        <div class="user-photo img"><img src="2.jpg"></div>
        <div class="chat-message" id="selfmessage">
        </div>
      </div>
      <div class="chat bot" id="input">
        <div class="user-photo"><img src="1.jpg"></div>
        <div class="chat-message" id="botmessage">
        </div>
      </div>*/
      chatlogs.appendChild(message)
}

function speak(string){
	var utterance = new SpeechSynthesisUtterance();
	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
	utterance.text = string;
	utterance.lang = "en-US";
	utterance.volume = 1; //0-1 interval
	utterance.rate = 1;
	utterance.pitch = 2; //0-2 interval
	speechSynthesis.speak(utterance);
}