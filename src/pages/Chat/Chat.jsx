

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userChats } from '../../Api/ChatRequest'
import Conversation from '../../components/Conversation/Conversation.jsx'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import "./Chat.css"
const Chat = () => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [chats, setChats] = useState([])
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
    },[])
    return (
        <div className='Chat'>
            {/*Left Side */}
            <div className='Left-side-chat'>
                <LogoSearch />
                <div className='Chat-container'>


                    <h2>Chats</h2>
                    <div className='Chat-list'>
                       {chats.map((chat)=>(
                        <div>
                        <Conversation data={chat} currentUserId={user._id} />
                        </div>
                       ))}
                    </div>
                </div>
            </div>
            {/*Right Side */}
            <div className='Right-side-chat'>
                Right Side
            </div>
        </div>
    )
}

export default Chat



