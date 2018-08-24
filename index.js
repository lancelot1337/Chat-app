const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const socket = require('socket.io');

// Static files
app.use(express.static('public'));

// Server setup
let server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

// socket setup
var io = socket(server);

// Event listener
io.on('connection', (socket) => {
    console.log('Socket connection made!', socket.id)
});
