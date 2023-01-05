const express = require('express');
const {createServer} = require('http');
const {Server} = require('socket.io');
const core = require('cors');

const app = express();
const httpServer = createServer(app);

const corsOrigin = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST']
};

app.use(core(corsOrigin));

const io = require('socket.io')(httpServer, {
    cors: {
        origin: 'http://127.0.0.1:5500',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('servermessage', (message) => {
        console.log('Message received: ' + message);
    });
});

const sendMsgToClient = () => {
    setInterval(() => {
        io.emit('clientmessage', {message: 'Hello from server', date: new Date()});
    }, 1000);
}

app.get('/socket', (req, res) => {
    sendMsgToClient();
    res.send('Socket is running...');
});

httpServer.listen(3000, () => {
    console.log('Server is running...');
});
