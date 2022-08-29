

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userChats } from '../../Api/ChatRequest'
import ChatBox from '../../components/ChatBox/ChatBox'
import Conversation from '../../components/Conversation/Conversation.jsx'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import NavIcons from '../../components/NavIcons/NavIcons'
import "./Chat.css"
const Chat = () => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [chats, setChats] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    const getChats = async () => {
        try {
            const { data } = await userChats(user._id)
            setChats(data)
            // console.log(data)
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getChats()
    }, [])
    return (
        <div className='Chat'>
            {/*Left Side */}
            <div className='Left-side-chat'>
                <LogoSearch />
                <div className='Chat-container'>


                    <h2>Chats</h2>
                    <div className='Chat-list'>
                        {chats.map((chat) => (
                            <div onClick={()=>setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={user._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*Right Side */}
            <div className='Right-side-chat'>
                <div style={{ width: "20rem", alignSelf: "flex-end" }} >
                    <NavIcons />
                </div>
                <ChatBox
                    chat={currentChat}
                    currentUser={user._id}
                    setSendMessage={setSendMessage}
                    receivedMessage={receivedMessage}
                />
            </div>
        </div>
    )
}

export default Chat



