//Importing different components
const express = require('express');
const socketio = require('socket.io');
const http = require('http');


const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js')

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        //introducing the user to the room and wolcoming him
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined! Say hi or something` })
        socket.join(user.room);

        callback();
    });

    //Handeling the messages, this function expects the messages and transfering them to the frontend
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', { user: user.name, text: message });
        
        callback();
    })
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})


//Middlewears
app.use(router);

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
