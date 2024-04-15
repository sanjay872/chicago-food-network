import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, off } from 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCEy6mxC-m41BHvUON_x1zcbMZyE7bzdPQ",
  authDomain: "chicago-food-network.firebaseapp.com",
  projectId: "chicago-food-network",
  storageBucket: "chicago-food-network.appspot.com",
  messagingSenderId: "532873168011",
  appId: "1:532873168011:web:7ad06f68bb6afeb122408e",
  measurementId: "G-8NSFBS170G",
  databaseURL: "https://chicago-food-network-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Chat = ({ userId, userType }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const chatRef = ref(database, 'chats');

    const handleData = (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.keys(messagesData).map((key) => ({
          id: key,
          ...messagesData[key],
        }));
        setMessages(messagesArray);
      } else {
        setMessages([]);
      }
    };

    onValue(chatRef, handleData);

    return () => off(chatRef, 'value', handleData);
  }, [database]);

  const sendMessage = () => {
    if (newMessage.trim() === '' || !userId) return;
      
    const chatRef = ref(database, 'chats');
    const newMessageData = {
      senderId: userId,
      userType,
      message: newMessage.trim(),
    };
      
    // Use push directly on the reference to add a new message to the database
    push(chatRef, newMessageData).then(() => {
      setNewMessage('');
    }).catch((error) => {
      console.error('Error sending message:', error);
    });
  };
  

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.senderId}</strong>: {message.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;