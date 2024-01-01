import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, getMessages } from "../redux/api/message"
import InputEmoji from 'react-input-emoji'
import { findMedia } from "../redux/slice/slice"
export const ChatBox = ({ currentChat, update }) => {
    const { user, massage, media } = useSelector(store => store.data)
    const [newMessage, setNewMessage] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch()
    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [massage])
    const scroll = useRef();
    return (
        <>
            {currentChat && currentChat ?
                <main className="main is-visible" >
                    <div className="container h-100">
                        <div className="d-flex flex-column h-100 position-relative">

                            <div className="chat-header border-bottom py-4 py-lg-7">
                                <div className="row align-items-center">

                                    <div className="col-2 d-xl-none">
                                        <Link className="icon icon-lg text-muted" to="/chats"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                        </Link>
                                    </div>

                                    <div className="col-8 col-xl-12">
                                        <div className="row align-items-center text-center text-xl-start">

                                            <div className="col-12 col-xl-6">
                                                <div className="row align-items-center gx-5">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-online  d-xl-inline-block">
                                                            <img className="avatar-img"
                                                                src={currentChat.receiverId === user?.id ? currentChat.senderImage : currentChat.receiverImage} alt="" />
                                                        </div>
                                                    </div>

                                                    <div className="col overflow-hidden">
                                                        <h5 className="text-truncate">{currentChat.receiverId === user?.id ? currentChat.senderName : currentChat.receiverName}</h5>
                                                        <p className="text-truncate">is typing<span className="typing-dots"><span>.</span><span>.</span><span>.</span></span></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 d-none d-xl-block">
                                                <div className="row align-items-center justify-content-end gx-6">
                                                    <div className="col-auto">
                                                        <Link className="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </Link>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-2 d-xl-none text-end">
                                        <Link to="#" className="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                        </Link>
                                    </div>


                                </div>
                            </div>

                            <div className="chat-body hide-scrollbar flex-1 h-100" >
                                {massage && massage?.map((row) => {
                                    return <div key={row.id}
                                        className="chat-body-inner" >
                                        <div className="py-6 py-lg-4">


                                            <div className={row.senderId === user.id ? "message message-out" : "message "} ref={scroll}>
                                                <Link to="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                                                    <img className="avatar-img" src={row.senderImage} alt="" />
                                                </Link>

                                                <div className="message-inner">
                                                    <div className="message-body">
                                                        {row.image === "null" &&
                                                            <div className="message-content">
                                                                <div className="message-text">
                                                                    <p>{row && row.text}</p>
                                                                </div>



                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                        </Link>

                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                                                    <span className="me-auto">Edit</span>
                                                                                    <div className="icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                                                    <span className="me-auto">Reply</span>
                                                                                    <div className="icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <Link className="dropdown-item d-flex align-items-center text-danger" to="#">
                                                                                    <span className="me-auto">Delete</span>
                                                                                    <div className="icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>}
                                                        {row.text === "undefined" &&
                                                            <div className="message-content">
                                                                <div className="message-gallery">
                                                                    <img alt='' src={row && row.image} className='img-fluid rounded' />
                                                                </div>



                                                                <div className="message-action">
                                                                    <div className="dropdown">
                                                                        <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                        </Link>

                                                                        <ul className="dropdown-menu">
                                                                            <li>
                                                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                                                    <span className="me-auto">Edit</span>
                                                                                    <div className="icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                                                    <span className="me-auto">Reply</span>
                                                                                    <div className="icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <hr className="dropdown-divider" />
                                                                            </li>
                                                                            <li>
                                                                                <Link className="dropdown-item d-flex align-items-center text-danger" to="#">
                                                                                    <span className="me-auto">Delete</span>
                                                                                    <div className="icon">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>}

                                                    </div>

                                                    <div className="message-footer">
                                                        <span className="extra-small text-muted">{row.time}</span>
                                                    </div>
                                                </div>
                                            </div>





                                            <div className="message-divider">
                                                <small className="text-muted">{row.date}</small>
                                            </div>




                                        </div>
                                    </div>
                                })}
                            </div>

                            <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">

                                <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
                                </div>



                                <div className="chat-form rounded-pill bg-dark" data-emoji-form="">
                                    <div className="row align-items-center gx-0">
                                        <div className='col-auto'>
                                            <div className="btn btn-icon btn-link text-body rounded-circle dz-clickable" >
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="validatedCustomFile" name='image' onChange={(e) => setImage(e.target.files[0])} />
                                                    <label className="custom-file-label" htmlFor="validatedCustomFile"></label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col">
                                            <div className="input-group">
                                                <InputEmoji className="react-input-emoji--input px-0" placeholder="Type your message..." rows="1" data-emoji-input="" data-autosize="true" style={{ overflow: "hidden", overflowWrap: "break-word", resize: "none", height: "47.2px" }}
                                                    theme="dark" onChange={handleChange}
                                                    borderColor='#1e2126'
                                                    value={newMessage}
                                                />

                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <button className="btn btn-icon btn-primary rounded-circle ms-5"

                                                onClick={() => {


                                                    const fromData = new FormData();
                                                    fromData.append("chatId", currentChat.id);
                                                    fromData.append("senderId", user.id);
                                                    fromData.append("senderName", user.name);
                                                    fromData.append("senderImage", user.image);
                                                    if (image !== null) {
                                                        fromData.append("image", image, image?.name);
                                                    } else {
                                                        fromData.append("text", newMessage);
                                                    }
                                                    dispatch(createMessage(fromData)).then((res) => {
                                                        dispatch(getMessages())
                                                        update()
                                                        setNewMessage("");
                                                    })
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </main> :
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

            }
            {/* <!-- Chat: Info --> */}

            <div className="offcanvas offcanvas-end offcanvas-aside" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvas-more" style={{ visibility: "visible" }} aria-modal="true" role="dialog">

                <div className="offcanvas-header py-4 py-lg-7 border-bottom">
                    <Link className="icon icon-lg text-muted" to="#" data-bs-dismiss="offcanvas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </Link>

                    <div className="visibility-xl-invisible overflow-hidden text-center">
                        <h5 className="text-truncate">Ollie Chandler</h5>
                        <p className="text-truncate">last seen 5 minutes ago</p>
                    </div>


                    <div className="dropdown">
                        <Link className="icon icon-lg text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        </Link>

                        <ul className="dropdown-menu" >
                            <li>
                                <Link to="#" className="dropdown-item d-flex align-items-center">
                                    Edit
                                    <div className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="dropdown-item d-flex align-items-center">
                                    Mute
                                    <div className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link to="#" className="dropdown-item d-flex align-items-center text-danger">
                                    Leave
                                    <div className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className="offcanvas-body hide-scrollbar">

                    <div className="text-center py-10">
                        <div className="row gy-6">
                            <div className="col-12">
                                <div className="avatar avatar-xl mx-auto">
                                    <img src={currentChat?.receiverId === user?.id ? currentChat?.senderImage : currentChat?.receiverImage} alt="#" className="avatar-img" />

                                    <Link to="#" className="badge badge-lg badge-circle bg-primary text-white border-outline position-absolute bottom-0 end-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12">
                                <h4>{currentChat?.receiverId === user?.id ? currentChat?.senderName : currentChat?.receiverName}</h4>
                                <p>{currentChat?.receiverId === user?.id ? currentChat?.senderEmail : currentChat?.receiverEmail}</p>
                            </div>
                        </div>
                    </div>



                    <ul className="nav nav-pills nav-justified" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" data-bs-toggle="pill" to="#offcanvas-tab-profile" role="tab" aria-controls="offcanvas-tab-profile" aria-selected="true">
                                Profile
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="pill" to="#offcanvas-tab-media" role="tab" aria-controls="offcanvas-tab-media" aria-selected="true">
                                Media
                            </Link>
                        </li>

                    </ul>



                    <div className="tab-content py-2" role="tablist">

                        <div className="tab-pane fade show active" id="offcanvas-tab-profile" role="tabpanel">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row align-items-center gx-6">
                                        <div className="col">
                                            <h5>Phone</h5>
                                            <p>{currentChat?.receiverId === user?.id ? currentChat?.senderPhone : currentChat?.receiverPhone}</p>
                                        </div>

                                        <div className="col-auto">
                                            <div className="btn btn-sm btn-icon btn-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item">
                                    <div className="row align-items-center gx-6">
                                        <div className="col">
                                            <h5>Name</h5>
                                            <p>{currentChat?.receiverId === user?.id ? currentChat?.senderName : currentChat?.receiverName}</p>
                                        </div>

                                        <div className="col-auto">
                                            <div className="btn btn-sm btn-icon btn-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item">
                                    <div className="row align-items-center gx-6">
                                        <div className="col">
                                            <h5>E-mail</h5>
                                            <p>{currentChat?.receiverId === user?.id ? currentChat?.senderEmail : currentChat?.receiverEmail}</p>
                                        </div>

                                        <div className="col-auto">
                                            <div className="btn btn-sm btn-icon btn-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul className="list-group list-group-flush border-top mt-8">
                                <li className="list-group-item">
                                    <div className="row align-items-center gx-6">
                                        <div className="col">
                                            <h5>Notifications</h5>
                                            <p>Enable sound notifications</p>
                                        </div>

                                        <div className="col-auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="accordion-security-check-5" />
                                                <label className="form-check-label" htmlFor="accordion-security-check-5"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul className="list-group list-group-flush border-top mt-8">
                                <li className="list-group-item">
                                    <Link to="#" className="text-danger">Delete Chat</Link>
                                </li>
                            </ul>
                        </div>



                        <div className="tab-pane fade" id="offcanvas-tab-media" role="tabpanel">
                            <div className="row row-cols-3 g-3 py-6">
                                {media && media.map((row) => {
                                    return <div className="col" key={row.id} onClick={() => {
                                        let mediaId = row.id
                                        dispatch(findMedia({ mediaId }))
                                    }}>
                                        <Link to="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-1.jpg"

                                        >
                                            <img className="img-fluid rounded" src={row && row.image} alt="" />
                                        </Link>
                                    </div>

                                })}
                            </div>
                        </div>




                    </div>

                </div>

            </div>

        </>
    );
}

