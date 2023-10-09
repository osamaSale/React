import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { Sidebar } from './Sidebar'
import { ChatBox } from './ChatBox'
import { SidebarUsers } from './SidebarUsers'
import { userChats } from '../redux/api/chat'
import { io } from "socket.io-client"
import { getAllUsers, singleUser } from '../redux/api/users'
export const Chat = () => {
    const { user, users } = useSelector((store) => store.users)
    const { chats } = useSelector((store) => store.chats)
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
        if (user) {
            dispatch(singleUser())
            dispatch(userChats())
        }
    }, [user._id])

    //  socket server
    const socket = useRef()
    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", user._id)
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });
    }, [user])


    // check Online  socket server
    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== user._id);
        const online = onlineUsers.find((user) => user.userId === chatMember)
        return online ? true : false
    }

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage]);

    // Get the message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log("data" , data)
            setReceivedMessage(data);
        });
    }, []);

    return (
        <div>
            {user ?
                <div className='wrapper'>
                    <aside id="sidebar">
                        <div className="h-100">
                            <div className="sidebar-logo">
                                <Link to="#">Chat</Link>
                            </div>
                            <ul className="sidebar-nav">
                                <li className="sidebar-header">
                                    Tools & Components
                                </li>
                                {chats && chats.map((row) => {
                                    return <li className="sidebar-item" key={row._id} onClick={() => {
                                        setCurrentChat(row);
                                    }}>
                                        <Sidebar chat={row} user={user} online={checkOnlineStatus(row)} />
                                    </li>

                                })}
                            </ul>
                        </div>
                    </aside>
                    <div className="main">
                        <Navbar />
                        <main className="content px-3 py-2">
                            <ChatBox
                                chat={currentChat}
                                user={user}
                                setSendMessage={setSendMessage}
                                receivedMessage={receivedMessage}
                            />
                        </main>
                    </div>
                    <SidebarUsers users={users} user={user} />
                </div> :
                <div className='loader'>
                    <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </div>
            }
        </div>
    )
}
