import React from 'react'
import { Link } from 'react-router-dom'
import { createChat } from "../redux/api/chat"
import { useDispatch } from 'react-redux'
export const SidebarUsers = ({ users, user, online }) => {
  const allUsers = users.filter((u) => u._id !== user._id)
  const dispatch = useDispatch()
  return (
    <aside id="sidebar" >
      <div className="h-100">
        <div className="sidebar-logo">
          <Link to="#">Users</Link>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-header">
            Tools & Components
          </li>
          {allUsers && allUsers.map((row) => {
            return <li className="sidebar-item" key={row._id}
              onClick={() => {
                if (window.confirm(`Are you sure you want to chat ${row.name}?`)) {
                  const data = {
                    senderId: user._id,
                    receiverId: row._id
                  }
                  dispatch(createChat(data))
                }
              }}>
              <div className="d-flex align-items-center p-3">
                <div className="flex-shrink-0 me-3">
                  <img src={row && row.image} className="rounded-circle " alt="..." width={40} height={40} />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0 text-light">{row && row.name}</h6>
                  <small className="mb-0" style={{ color: online ? "#51e200" : "silver" }}>{online ? "Online" : "Offline"}</small>
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
    </aside>
  )
}
