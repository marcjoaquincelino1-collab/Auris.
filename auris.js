const button = document.getElementById("auris-button")
const chat = document.getElementById("auris-chat")
const input = document.getElementById("auris-input")
const messages = document.getElementById("auris-messages")

/* open chat */

button.onclick = () => {

if(chat.style.display === "flex"){

chat.style.display = "none"

}else{

chat.style.display = "flex"

}

}

/* send message */

input.addEventListener("keypress", function(e){

if(e.key === "Enter" && input.value.trim() !== ""){

let user = document.createElement("div")
user.className = "auris-bubble"
user.style.background = "#2979ff"
user.innerText = input.value

messages.appendChild(user)

input.value=""

messages.scrollTop = messages.scrollHeight

setTimeout(()=>{

let ai = document.createElement("div")

ai.className="auris-bubble"

ai.innerText="Scanning request... security analysis in progress."

messages.appendChild(ai)

messages.scrollTop = messages.scrollHeight

},700)

}

})