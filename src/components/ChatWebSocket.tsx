"use client";
import { useEffect, useState } from "react";

interface IChatWebSocket {
 username: string;
 photo: string;
 message: string;
}

const ChatWebSocket = () => {
 const [messages, setMessages] = useState<IChatWebSocket[]>([]);
 const [socket, setSocket] = useState<WebSocket | null>(null);

 const initialWebSocket = () => {
  const ws = new WebSocket("wss://api-v2.elchocrud.pro");
  ws.onopen = () => {
   console.log("WebSocket opened");
  };
  ws.onmessage = (event) => {
   setMessages(JSON.parse(event.data));
  };
  ws.onerror = (error) => {
   console.log(error);
  };
  ws.onclose = () => {
   console.log("WebSocket closed");
  };
  setSocket(ws);
 };

 const sendMessage = () => {
  const messageData = {
   event: "message",
   username: "Elkhan",
   photo:
    "https://elchocrud.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgirl.7db8d490.png&w=1200&q=75",
   message: "Hello everyone ❤️‍🔥",
  };

  socket?.send(JSON.stringify(messageData));
 };

 useEffect(() => {
  initialWebSocket();
 }, []);

 return (
  <section className={scss.ChatWebSocket}>
   <div className="container">
    <div className={scss.content}>
     <h1>ChatWebSocket</h1>
     <button onClick={sendMessage}>send</button>
     {messages
      .slice()
      .reverse()
      .map((item, index) => (
       <div key={index} className={scss.message}>
        <img src={item.photo} alt="avatar" />
        <h3>{item.username}</h3>
        <p>{item.message}</p>
       </div>
      ))}
    </div>
   </div>
  </section>
 );
};

export default ChatWebSocket;
