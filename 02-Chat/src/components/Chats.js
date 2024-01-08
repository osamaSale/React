import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChatBox } from './ChatBox';
import { getIdChat } from "../redux/slice/slice"
import { getMessages } from '../redux/api/message';
import { io } from "socket.io-client";
export const Chats = ({ update }) => {
    const { user, chat } = useSelector((store) => store.data)
    const [currentChat, setCurrentChat] = useState(null);
    const [isvisible, setIsVisible] = useState("is-visible");
    const [onlineUsers, setOnlineUsers] = useState([]);
    const dispatch = useDispatch()
    //  socket server
    const socket = useRef()
    useEffect(() => {
        socket.current = io('http://localhost:5000')
        if (user) {
            socket.current.emit("online", user.id)
            socket.current.on("get-users", (user) => {
                setOnlineUsers(user);
            });
        }
    }, [user])


    return (
        <>
            <aside className="sidebar bg-light">
                <div className="tab-pane fade h-100 show active" id="tab-content-chats" role="tabpanel">
                    <div className="d-flex flex-column h-100 position-relative">
                        <div className="hide-scrollbar">

                            <div className="container py-8">

                                <div className="mb-8">
                                    <h2 className="fw-bold m-0">Chats</h2>
                                </div>
                                <div className="mb-6">
                                    <form action="#">
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <div className="icon icon-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                </div>
                                            </div>

                                            <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..." />
                                        </div>
                                    </form>
                                </div>


                                <div className="card-list">

                                    {chat && chat.map((row) => {
                                        return <Link className="card border-0 text-reset" key={row.id}
                                            onClick={() => {
                                                let chatId = row.id
                                                setCurrentChat(row)
                                                dispatch(getIdChat({ chatId }))
                                                dispatch(getMessages())
                                                setIsVisible("is-visible")

                                            }}>
                                            <div className="card-body">
                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        {row.receiverId === user?.id ?
                                                            <div className={onlineUsers ? onlineUsers.find((u) => u.userId === row.senderId) ? "avatar avatar-online" : "avatar avatar-offline" : []} >
                                                                <img src={row && row.senderImage} alt="#" className="avatar-img" />
                                                            </div> :
                                                            <div className={onlineUsers ? onlineUsers.find((u) => u.userId === row.receiverId) ? "avatar avatar-online" : "avatar avatar-offline" : []}  >
                                                                <img src={row && row.receiverImage} alt="#" className="avatar-img" />
                                                            </div>
                                                        }

                                                    </div>

                                                    <div className="col">
                                                        {row && row.receiverId === user?.id ?
                                                            <div className="d-flex align-items-center mb-3">
                                                                <h5 className="me-auto mb-0">{row && row.senderName}</h5>
                                                                <span className="text-muted extra-small ms-2">12:45 PM</span>
                                                            </div> :
                                                            <div className="d-flex align-items-center mb-3">
                                                                <h5 className="me-auto mb-0">{row && row.receiverName}</h5>
                                                                <span className="text-muted extra-small ms-2">12:45 PM</span>
                                                            </div>
                                                        }

                                                        <div className="d-flex align-items-center">


                                                            {row?.mass ?
                                                                <div className="line-clamp me-auto">
                                                                    <p>{row.mass.text === "undefined" ? <span>is Image</span> : row.mass.text}</p>
                                                                </div> :

                                                                <div className="line-clamp me-auto">

                                                                    <p>Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.</p>
                                                                </div>
                                                            }
                                                            
                                                            <div className="badge badge-circle bg-primary ms-5">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <ChatBox
                currentChat={currentChat}
                isvisible={isvisible}
                setIsVisible={setIsVisible}
                onlineUsers={onlineUsers}
            />
        </>
    );
}

