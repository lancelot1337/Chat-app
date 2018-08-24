const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'));

// Server setup
let server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});