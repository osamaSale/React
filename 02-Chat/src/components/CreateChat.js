import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, searchUser } from '../redux/api/users';
import { createFriends } from '../redux/api/friends';

export const CreateChat = ({ update }) => {
    const { people, user, friends } = useSelector(store => store.data)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <aside className="sidebar bg-light">
                <div className="tab-pane fade h-100 show active" >
                    <div className="d-flex flex-column h-100">
                        <div className="hide-scrollbar">
                            <div className="container py-8">
                                <div className="mb-8">
                                    <h2 className="fw-bold m-0">Create chat</h2>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-5">
                                        <form action="#">
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
                                        </form>
                                    </div>

                                    {/*   <ul className="nav nav-pills nav-justified" role="tablist">

                                        <li className="nav-item">
                                            <Link className="nav-link active" data-bs-toggle="pill" to="#create-chat-info" role="tab" aria-controls="create-chat-info" aria-selected="true">
                                                Details
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" data-bs-toggle="pill" to="#create-chat-members" role="tab" aria-controls="create-chat-members" aria-selected="true">
                                                People
                                            </Link>
                                        </li>

                                    </ul> */}
                                </div>

                                <div >
                                    {/*  <div className="tab-pane fade show active" id="create-chat-info" role="tabpanel">

                                        <div className="card border-0">
                                            <div className="profile">
                                                <div className="profile-img text-primary rounded-top">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z" /><path className="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z" /><path className="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z" /><circle className="cls-2" cx="94.5" cy="57.5" r="22.5" /><path className="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z" /></g></g></svg>
                                                </div>

                                                <div className="profile-body p-0">
                                                    <div className="avatar avatar-lg">
                                                        <span className="avatar-text bg-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                                        </span>

                                                        <div className="badge badge-lg badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                        </div>

                                                        <input id="upload-chat-img" className="d-none" type="file" />
                                                        <label className="stretched-label mb-0" htmlFor="upload-chat-img"></label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <form autoComplete="off">
                                                    <div className="row gy-6">
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="text" className="form-control" id="floatingInput" placeholder="Enter a chat name" />
                                                                <label htmlFor="floatingInput">Enter group name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <textarea className="form-control" placeholder="Description" id="floatingTextarea" rows="8" data-autosize="true" style={{ minHeight: "100px" }}></textarea>
                                                                <label htmlFor="floatingTextarea">What's your purpose?</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center mt-4 px-6">
                                            <small className="text-muted me-auto">Enter chat name and add an optional photo.</small>
                                        </div>

                                        <div className="mt-8">
                                            <div className="d-flex align-items-center mb-4 px-6">
                                                <small className="text-muted me-auto">Options</small>
                                            </div>

                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <div className="row gx-5">
                                                        <div className="col-auto">
                                                            <div className="btn btn-sm btn-icon btn-dark">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h5>Make Private</h5>
                                                            <p>Can only be viewed by invites</p>
                                                        </div>
                                                        <div className="col-auto align-self-center">
                                                            <div className="form-check form-switch ps-0">
                                                                <input className="form-check-input" type="checkbox" id="new-chat-options-1" />
                                                                <label className="form-check-label" htmlFor="new-chat-options-1"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className=" " >
                                        <nav>


                                            {people && people.map((row) => {
                                                return <div className="card border-0 mt-5" key={row.id}>
                                                    <div className="card-body">

                                                        <div className="row align-items-center gx-5">
                                                            <div className="col-auto">
                                                                <div className="avatar ">
                                                                 
                                                                    <img className="avatar-img" src={row && row.image} alt="" />


                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <h5>{row && row.name}</h5>
                                                                <p>{`${row && row.email}`.slice(0, 14)}..</p>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className='btn btn-dark btn-sm'
                                                                type='submit'
                                                                  disabled={friends && friends.find((f) => f.friendId === row.id) && user && user.friends.find((c) => c.friendId === row.id)} 
                                                                    onClick={() => {
                                                                        let data = { userId: user.id, friendId: row.id }
                                                                        dispatch(createFriends(data)).then(() => {
                                                                            dispatch(getAllUsers())
                                                                            update()
                                                                        })
                                                                    }}>
                                                                    {friends && friends.find((f) => f.friendId === row.id)   && user && user.friends.find((c) => c.friendId === row.id) ?
                                                                        <span> Friends </span> : <span>Add Friend</span>
                                                                    }

                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            })}
                                        </nav>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </aside>

            {/* <main className="main">
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
            </main> */}
        </div>
    );
}

