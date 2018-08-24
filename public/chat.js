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
        message: message.nodeValue,
        handle: handle.value
    });
});