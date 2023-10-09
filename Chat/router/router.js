const express = require("express");
const { register, login, getAllUsers, search, deleteUser, EditUser, singleUser } = require("../controller/users");
const { upload } = require("../connection/upload");
const { createChat, userChats } = require("../controller/chat");
const { addMessage, getMessages } = require("../controller/massage");
const router = express.Router();

// ============================== Router User ============================= //
router.get("/users", getAllUsers)
router.post("/users", upload.single("image"), register);
router.post("/users/login", login)
router.get("/users/search", search)
router.delete("/users/:id", deleteUser)
router.put("/users/:id", EditUser)
router.get("/users/single/:id", singleUser)



// ============================== Router Chat ============================= //

router.post('/chat', createChat);
router.get('/chat/single/:userId', userChats);

//============================ Router Massage ============================== //

router.post('/massage', addMessage);
router.get('/massage/:chatId', getMessages);


module.exports = router;