const express = require('express');
const app = express();
const port = 3001;

// API to check if the server is working
app.get('/', (req, res) => {
    console.log('Hello everone');
    res.send('Hello Everyone!');
});


// API to check if the server is working
app.get('/status', (req, res) => {
    console.log("Server Is working!")
    res.send('Server is working!');
});

// API to log a random message
app.get('/log', (req, res) => {
    const messages = [
        'Hello, world!',
        'This is a random message.',
        'Node.js is awesome!',
        'Express makes server creation easy.',
        'Have a great day!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
    res.send('Message logged to the console.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
