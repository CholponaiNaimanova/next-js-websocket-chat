"use client";
import s from "./ChatList.module.scss"

const ChatList = () => {
    return(
        <div className={s.chats}>
        <div className={s.chat}>
            <div className="">
            <div className={s.users}>
                <div className={s.user}>
                    <img src="https://w7.pngwing.com/pngs/802/825/png-transparent-redbubble-polite-cat-meme-funny-cat-meme-thumbnail.png" alt="" width={60}/>
                    <h2>Cholpon</h2>
                </div>
            </div>

            <div className={s.message}>

                <div className="">
                <h1>Messages</h1>

<hr />
                </div>
                <div className={s.text}>
                <img src="https://i.pinimg.com/564x/01/f2/51/01f25141549b312b831532ef4d7eadfb.jpg" alt="" width={70}/>
                
                <div className={s.textTwo}>
                <h2>Adele</h2>
                <p>typing...</p>
                </div>

                </div>
<hr />

                </div>
            </div>
        </div>
          
        

        </div>
        
    )
}


export default ChatList