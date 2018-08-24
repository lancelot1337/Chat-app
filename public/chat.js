// make socket connections
const socket = io.connect('http://localhost:3000');

//DOM
const message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

//Event emitter
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

//Event listener
socket.on('chat', (data) =>{
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message} </p>`;
});