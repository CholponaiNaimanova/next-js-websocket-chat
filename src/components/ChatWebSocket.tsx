"use client";
import { useEffect, useState } from "react";
import s from "./ChatWebSocket.module.scss";
import ChatList from "./ChatList/ChatList";
import { MdCall } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

interface IChatWebSockett {
  username: string;
  photo: string;
  message: string;
}

const ChatWebSocket = () => {
  const [messages, setMessages] = useState<IChatWebSockett[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [inputValue, setInputValue] = useState('');

  const initialWebSocket = () => {
    const ws = new WebSocket("wss://api.elchocrud.pro");
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
      initialWebSocket();
    };
    setSocket(ws);
  };

  const sendMessage = () => {
    if (!inputValue) return;
    const messageData = {
      event: "message",
      username: "Cholpon",
      photo:
        "https://w7.pngwing.com/pngs/802/825/png-transparent-redbubble-polite-cat-meme-funny-cat-meme-thumbnail.png",
      message: inputValue,
    };

    socket?.send(JSON.stringify(messageData));
    setInputValue('');
  };

  useEffect(() => {
    initialWebSocket();
  }, []);

  return (
    <div className="">
      <div className={s.web}>
        <ChatList />

        <div className={s.correspondence}>
          <div className={s.green}>
            <img
              src="https://i.pinimg.com/564x/01/f2/51/01f25141549b312b831532ef4d7eadfb.jpg"
              alt=""
              width={60}
            />

            <div className={s.p}>
            <p>Adele</p>
            <h3>online</h3>
            </div>

            <div className={s.icons}>
            <a><MdCall />
            </a>
            <a><IoMdVideocam />
            </a>
            <a><HiMenu />
            </a>
            </div>

          </div>
          <div className={s.today}>
            <h3>Today</h3>
          </div>


          <div className={s.messContent}>
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={s.message}
                  style={{ marginLeft: item.username === "Cholpon" ? 'auto' : 0 }}
                >
                  <div className={s.messageContent}>
                    <h3>{item.username}</h3>
                    <p>{item.message}</p>
                  </div>
                  <img src={item.photo} alt="img" className={s.photo} width={60} />
                </div>
              ))}
          </div>


          <div className={s.input}>
            <input
              value={inputValue}
              type="text"
              placeholder="Type a message"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={sendMessage}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWebSocket;