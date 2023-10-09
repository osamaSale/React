const ChatModel = require("../model/chat");

const createChat = async (req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    });
    try {
        const result = await newChat.save();
        res.json({ status: 200, message: "Successfully", result: result })
    } catch (error) {
        res.status(500).json(error);
    }
}

const userChats = async (req, res) => {
    try {
        const chat = await ChatModel.find({
            members: { $in: [req.params.userId] },
        });
        res.json({ status: 200, message: "Successfully", result: chat })
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = { createChat, userChats };