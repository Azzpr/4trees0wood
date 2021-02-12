import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

//importing custom components
import InfoBar from '../../components/InfoBar/InfoBar';
import Input from '../../components/Input/Input';
import Messages from '../../components/Messages/Messages';
//importing some styling
import './Chat.css'
let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000/';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT, { transports: ["websocket", "polling", "flashsocket"] });

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, (error) => {

        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])

    //handeling messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);
    /// funciton for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message, messages)
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                <Messages />
            </div>
        </div>
    )
}
export default Chat;