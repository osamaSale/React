import React, { useEffect, useState, useRef } from 'react'
import { singleUserChat } from '../redux/api/chat'
import { getMessages, addMessages } from '../redux/api/massage'
import { useDispatch } from 'react-redux';
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
export const ChatBox = ({ chat, user, setSendMessage, receivedMessage }) => {
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const dispatch = useDispatch()
    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }
    useEffect(() => {
        if (chat) {
            const userId = chat?.members?.find((id) => id !== user._id)
            // Single user Chat
            dispatch(singleUserChat(userId)).then((res) => {
                setUserData(res.payload?.result)
            })
            // Single user Massage
            dispatch(getMessages(chat._id)).then((res) => {
                setMessages(res.payload?.result)
            })
        }
    }, [chat, user])


    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    // Receive Message from parent component
    useEffect(() => {
        console.log("Message Arrived: ", receivedMessage.chatId)
        if (receivedMessage !== null && receivedMessage?.chatId === chat && chat._id) {
            setMessages([...messages, receivedMessage]);
        }
        
    }, [receivedMessage ,messages])

    const scroll = useRef();
    return (
        <div className="ChatBox-container">
            {chat ? <>
                <div className="chat-header">
                    <li className="sidebar-item">
                        <div className="d-flex align-items-center p-3">
                            <div className="flex-shrink-0 me-3">
                                <img src={userData && userData.image} className="rounded-circle " alt="..." width={40} height={40} />
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="mb-0 text-light">{userData && userData.name}</h6>
                                <small className="mb-0 text-light" >{userData && userData.email}</small>
                            </div>
                        </div>
                    </li>
                    <hr style={{ border: "0.1px solid #ececec" }} />
                </div>
                <div className="chat-body" >
                    {messages && messages.map((message) => {
                        return <div key={message._id} className={message.senderId === user._id ? "message own" : "message"} ref={scroll}>
                            <span>{message.text}</span>
                            <span>{format(message.createdAt)}</span>
                        </div>
                    })}
                </div>
                <div className='chat-sender'>
                    <InputEmoji
                        value={newMessage ? newMessage : ""}
                        onChange={handleChange}
                        placeholder="Type a message"
                        cleanOnEnter

                    />
                    <button type="button" className="btn btn-primary" onClick={async (e) => {
                        e.preventDefault()
                        const message = {
                            senderId: user,
                            text: newMessage,
                            chatId: chat._id,
                        }
                        const receiverId = chat.members.find((id) => id !== user._id);

                        setSendMessage({ ...message, receiverId })


                         dispatch(addMessages(message)).then((res) => {
                            setMessages([...messages, res.payload?.result]);
                            setNewMessage("");
                        })
                    }}
                    >Send</button>
                </div>

            </> :
                <h3 className="text-center p-4">
                    Tap on a chat to start conversation...
                </h3>
            }
        </div>
    )
}
