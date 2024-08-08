const socket = io();

let username;
let textarea = document.querySelector("#textarea");
let chatbox = document.querySelector(".chat-box");
do {
  username = prompt("Enter your username:");
} while (!username);

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});

function sendMessage(message) {
  let msg = {
    user: username,
    message: message,
  };

  // Append
  appendMessage(msg, "outgoing");
  textarea.value = "";
  scrollToBottom();

  // Send to server
  socket.emit("message", msg);
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");

  let markup = `
             <p class="meta">${msg.user}</p>
                <p class="text">
                    ${msg.message}
                </p>
    `;
  mainDiv.innerHTML = markup;
  chatbox.appendChild(mainDiv);
}

function scrollToBottom() {
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Receive messages
socket.on("message", (msg) => {
  appendMessage(msg, "incoming");
  scrollToBottom();
});
