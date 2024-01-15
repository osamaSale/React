import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers } from '../redux/api/users';
import { createChat } from '../redux/api/chat';
import { searchFriends } from '../redux/api/friends';

export const Friends = ({ update, onlineUsers }) => {
    const { user, chat, friends, loading } = useSelector(store => store.data)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (loading) {
        return <div className="container-fluid">
            <div className="row align-items-center justify-content-center min-vh-100 gx-0">
                <div className="spinner-border spinner-border me-5" role="status" >
                </div> Please wait...
            </div>
        </div>
    }
    return (
        <>
            <aside className="sidebar bg-light">
                <div className="tab-pane fade h-100 show active">
                    <div className="d-flex flex-column h-100">
                        <div className="hide-scrollbar">
                            <div className="container py-8">
                                <div className="mb-8">
                                    <h2 className="fw-bold m-0">Friends</h2>
                                </div>
                                <div className="mb-6">

                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <div className="icon icon-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            </div>
                                        </div>

                                        <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users"
                                            onChange={(e) => setSearch(e.target.value)}
                                            onKeyUp={() => {
                                                if (search === "") {
                                                    update();
                                                } else {
                                                    dispatch(searchFriends(search))
                                                }
                                            }}
                                        />
                                    </div>


                                </div>

                                <div className="card-list">

                                    {friends && friends.length <= 0 &&
                                        <div className=" text-center" role="alert">
                                            Friends is Empty
                                        </div>}
                                    {friends && friends.map((row) => {
                                        return <div className="card border-0" key={row.id}

                                        >
                                            <div className="card-body">

                                                <div className="row align-items-center gx-5">
                                                    <div className="col-auto">
                                                        <Link to="#" className="avatar ">

                                                            <img className="avatar-img" src={row && row.image} alt="" />
                                                        </Link>
                                                    </div>

                                                    <div className="col">
                                                        <h5><Link to="#">{row && row.name}</Link></h5>
                                                        {onlineUsers ? onlineUsers.find((u) => u.userId === parseInt(row.friendId)) ?
                                                            < p > Online</p> :
                                                            < p > Offline</p>
                                                            : []}
                                                    </div>

                                                    <div className="col-auto">
                                                        <button className='btn btn-dark btn-sm'
                                                            type='submit'
                                                            disabled={chat.find((c) => c.receiverId === row.friendId || c.senderId === row.friendId)}
                                                            onClick={() => {
                                                                let data = { senderId: user.id, receiverId: row.friendId }
                                                                dispatch(createChat(data)).then((res) => {
                                                                    const { status } = res?.payload
                                                                    if (status === 200) {
                                                                        dispatch(getAllUsers())
                                                                        update()
                                                                        navigate('/chatGroup')
                                                                    }
                                                                })
                                                            }}
                                                        >
                                                            {chat.find((c) => c.receiverId === row.friendId || c.senderId === row.friendId) ?
                                                                <span>In message</span> : <span>New message</span>

                                                            }

                                                        </button>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    })}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside >
            <main className="main">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 justify-content-center text-center">
                        <div className="mb-6">
                            <span className="icon icon-xl text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </span>
                        </div>

                        <p className="text-muted">Pick a person from left menu, <br /> and start your conversation.</p>
                    </div>

                </div>
            </main>
        </>
    );
}

