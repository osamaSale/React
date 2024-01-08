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
                                </div>

                                <div >
                                 

                                    <div className="">
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
                                                                disabled={friends && friends?.find((f) => f.friendId === row.id) }
                                                                    onClick={() => {
                                                                        let data = { userId: user.id, friendId: row.id }
                                                                        dispatch(createFriends(data)).then(() => {
                                                                            dispatch(getAllUsers())
                                                                            update()
                                                                        })
                                                                    }}>
                                                                     {friends && friends.find((f) => f.friendId === row.id)   ?
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

