import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { createUser, deleteUser, editUser, findUserEmail, getAllUsers, login, searchUser, updatePassword } from "../api/users"
import { createFriends, getAllFriends, searchFriends } from "../api/friends";
import { createChat, getAllChat } from "../api/chat";
import { createMessage, getMessages } from "../api/message";
import { createChatGroup, createChatGroupMessage, createChatGroupUsers, getChatGroup, getChatGroupMessage, getChatGroupUsers } from "../api/chatGroup";


const initialState = {
    loading: false,
    users: [],
    friends: [],
    chat: [],
    people: [],
    getMassages: [],
    massage: [],
    media: null,
    mediaId: null,
    chatId: null,
    user: null,
    chatGroup: [],
    ChatGroupUsers: [],
    ChatGroupMessage: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("user")
            state.user = null
        },
        getIdChat: (state, action) => {
            const { chatId } = action.payload
            state.chatId = chatId
        },
        findMedia: (state, action) => {
            const { mediaId } = action.payload
            state.mediaId = mediaId
            console.log(mediaId)
        },

    },

    extraReducers: builder => {

        /* ===================== Users ======================== */

        // Get All Users

        builder.addCase(getAllUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {

            let user = JSON.parse(localStorage.getItem('user'));

            if (user) {
                state.user = state.users?.find((u) => u.id === user.id)
                state.people = action.payload.result ? action.payload.result.filter((f) => f.id !== user.id) : []
            } else {
                state.user = null
            }

            state.users = action.payload.result
            state.loading = false
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false
        })

        // Create User

        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
        })

        // Edit User 

        builder.addCase(editUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(editUser.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(editUser.rejected, (state, action) => {
            state.loading = false
        })
        // update Password

        builder.addCase(updatePassword.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updatePassword.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(updatePassword.rejected, (state, action) => {
            state.loading = false
        })

        // Delete User

        builder.addCase(deleteUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
        })

        // Search User

        builder.addCase(searchUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(searchUser.fulfilled, (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.people = action.payload.result

            } else {
                state.people = [...state.people]
            }
            state.loading = false
        })
        builder.addCase(searchUser.rejected, (state, action) => {
            state.loading = false
        })

        // Login 

        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
        })

        // Find User Email

        builder.addCase(findUserEmail.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(findUserEmail.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {

                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(findUserEmail.rejected, (state, action) => {
            state.loading = false
        })

        /* ===================== Friends ======================== */

        // Get All Friends

        builder.addCase(getAllFriends.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllFriends.fulfilled, (state, action) => {
            state.friends = action.payload.result ? action.payload.result.filter((f) => f.userId === state.user?.id) : []
            state.loading = false
        })
        builder.addCase(getAllFriends.rejected, (state, action) => {
            state.loading = false
        })

        // Create friends

        builder.addCase(createFriends.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createFriends.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(createFriends.rejected, (state, action) => {
            state.loading = false
        })
        // Search User

        builder.addCase(searchFriends.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(searchFriends.fulfilled, (state, action) => {
            let { status, name } = action.payload
            console.log(name)
            if (status === 200) {
                state.friends = action.payload.result

            } else {
                state.friends = action.payload.result ? action.payload.result.filter((f) => f.userId === state.user?.id) : []
            }
            state.loading = false
        })
        builder.addCase(searchFriends.rejected, (state, action) => {
            state.loading = false
        })

        // =======================    chats   ============================ //

        // get Chat
        builder.addCase(getAllChat.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllChat.fulfilled, (state, action) => {


            state.chat = action.payload.result ? action.payload.result.filter((c) => c.senderId === state.user?.id || c.receiverId === state.user?.id) : []

            state.chat.forEach((ch) => {
                ch.mass = state.getMassages ? state.getMassages.findLast((m) => m.chatId === parseInt(ch.id)) : []

            })



            state.loading = false
        })
        builder.addCase(getAllChat.rejected, (state, action) => {
            state.loading = false
        })

        // Create Chat
        builder.addCase(createChat.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createChat.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(createChat.rejected, (state, action) => {
            state.loading = false
        })

        // =======================    Message   ============================ //

        // Create Message
        builder.addCase(createMessage.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createMessage.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(createMessage.rejected, (state, action) => {
            state.loading = false
        })
        // get Message
        builder.addCase(getMessages.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getMessages.fulfilled, (state, action) => {
            state.getMassages = action.payload.result
            state.massage = action.payload.result ? action.payload.result.filter((m) => m.chatId === parseInt(state.chatId)) : []
            state.media = action.payload.result ? action.payload.result.filter((m) => m.text === "undefined") : []
            state.loading = false

        })
        builder.addCase(getMessages.rejected, (state, action) => {
            state.loading = false
        })


        // =======================   Chat Group   ============================ //
        // get Chat Group
        builder.addCase(getChatGroup.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getChatGroup.fulfilled, (state, action) => {
            state.chatGroup = action.payload.result

        })
        builder.addCase(getChatGroup.rejected, (state, action) => {
            state.loading = false
        })
        // Create Chat Group
        builder.addCase(createChatGroup.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createChatGroup.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false

        })
        builder.addCase(createChatGroup.rejected, (state, action) => {
            state.loading = false
        })

        // =======================   Chat Group Users  ============================ //
        // get Chat Group Users

        builder.addCase(getChatGroupUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getChatGroupUsers.fulfilled, (state, action) => {
            state.ChatGroupUsers = action.payload.result

        })
        builder.addCase(getChatGroupUsers.rejected, (state, action) => {
            state.loading = false
        })

        // Create Chat Group Users

        builder.addCase(createChatGroupUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createChatGroupUsers.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false

        })
        builder.addCase(createChatGroupUsers.rejected, (state, action) => {
            state.loading = false
        })

        // =======================   Chat Group Message  ============================ //
        // get Chat Group Message

        builder.addCase(getChatGroupMessage.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getChatGroupMessage.fulfilled, (state, action) => {
            state.ChatGroupMessage = action.payload.result

        })
        builder.addCase(getChatGroupMessage.rejected, (state, action) => {
            state.loading = false
        })

         // Create Chat Group Message

         builder.addCase(createChatGroupMessage.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createChatGroupMessage.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false

        })
        builder.addCase(createChatGroupMessage.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export const { logout, getIdChat, findMedia } = dataSlice.actions;
export default dataSlice.reducer