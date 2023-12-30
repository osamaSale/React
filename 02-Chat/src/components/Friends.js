import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers, searchUser } from '../redux/api/users';
import { createChat } from '../redux/api/chat';
export const Friends = ({ update }) => {
    const { user  ,chat} = useSelector(store => store.data)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    return (

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
                                                dispatch(searchUser(search))
                                            }
                                        }}
                                    />
                                </div>



                                <div className="mt-5">
                                    <Link to="#" className="btn btn-lg btn-primary w-100 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-invite">
                                        Find Friends

                                        <span className="icon ms-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="card-list">

                                {user && user.friends && user.friends.length <= 0 &&
                                    <div className=" text-center" role="alert">
                                        Friends is Empty
                                    </div>}
                                {user && user.friends.map((row) => {
                                    return <div className="card border-0" key={row.id}>
                                        <div className="card-body">

                                            <div className="row align-items-center gx-5">
                                                <div className="col-auto">
                                                    <Link to="#" className="avatar ">

                                                        <img className="avatar-img" src={row && row.image} alt="" />
                                                    </Link>
                                                </div>

                                                <div className="col">
                                                    <h5><Link to="#">{row && row.name}</Link></h5>
                                                    <p>last seen 3 days ago</p>
                                                </div>

                                                <div className="col-auto">

                                                    <div className="dropdown">
                                                        <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                        </Link>

                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <button className="dropdown-item" 
                                                                 disabled ={chat.find((c) => c.receiverId === row.friendId)}  
                                                                onClick={() => {
                                                               
                                                                    console.log(chat.find((c) => c.receiverId === row.friendId))
                                                                     let data = { senderId: user.id, receiverId: row.friendId }
                                                                    dispatch(createChat(data)).then((res) => {
                                                                        console.log(res)
                                                                        dispatch(getAllUsers())
                                                                        update()
                                                                    }) 
                                                                }}
                                                            >New message</button></li>
                                                            <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                                            </li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
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

    );
}

