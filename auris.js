const orb = document.getElementById("auris-orb");

/* FOLLOW CURSOR */

document.addEventListener("mousemove", (e)=>{

    let x = (e.clientX / window.innerWidth - 0.5) * 40;
    let y = (e.clientY / window.innerHeight - 0.5) * 40;

    orb.style.transform =
        "translate(" + x + "px," + y + "px)";
});

/* CHAT SYSTEM */

function sendMessage(){

    let input = document.getElementById("user-input");
    let chat = document.getElementById("chat-log");

    let msg = input.value;

    if(msg === "") return;

    chat.innerHTML += "<div><b>You:</b> " + msg + "</div>";

    setTimeout(()=>{
        chat.innerHTML += "<div><b>Auris:</b> I hear thee.</div>";
    },500);

    input.value="";
}