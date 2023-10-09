import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { singleUserChat } from '../redux/api/chat'
export const Sidebar = ({ chat, user, online }) => {
    const [userData, setUserData] = useState(null)
    const userId = chat.members.find((id) => id !== user._id)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(singleUserChat(userId)).then((res) => {
            const { result } = res.payload
            setUserData(result)
        })
    }, [])



    return (
        <>
            <div className="d-flex align-items-center p-3">
                <div className="flex-shrink-0 me-3">
                    <img src={userData && userData.image} className="rounded-circle " alt="..." width={40} height={40} />
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0 text-light">{userData && userData.name}</h6>
                    <small className="mb-0" style={{ color: online ? "#51e200" : "silver" }}>{online ? "Online" : "Offline"}</small>
                </div>
            </div>
        </>
    )
}
