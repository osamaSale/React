const asyncHandle = require("express-async-handler")
const User = require("../model/users")
const cloudinary = require("../connection/cloudinary");
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRATION
        })
}


// ======================== Get All Users ================================ //

const getAllUsers = asyncHandle(async (req, res) => {

    const users = await User.find()

    if (users) {
        res.json({ status: 200, massage: "Users List Fetched Successfully", result: users })
    } else if (users.length === 0) {
        res.json({ status: 202, massage: "No Users Found" })
    } else {
        res.json({ status: 422, massage: "Not NetWordk" })
    }

})


// ======================== Register ================================ //


const register = asyncHandle(async (req, res) => {
    const { name, email, password, phone, authorization } = req.body
    let image = req.body.image || req.file;
    let cloudinary_id = null;

    if (!name || !email || !password || !phone || !authorization || !image) {
        res.json({ status: 422, message: "Please Enter all the Feilds" });
    }


    const userExists = await User.findOne({ email })
    if (userExists) {
        let public_id = userExists.cloudinary_id === null ? "null" : userExists.cloudinary_id.replace('Chat/users/g', '')
        await cloudinary.uploader.destroy(public_id).then((res) => {
            imageUrl = res
        });
        res.json({ status: 201, message: "User already exists" });
    }


    image = req.file
    if (image = req.file) {
        image = await cloudinary.uploader.upload(req.file.path, { folder: "Chat/users" });
        cloudinary_id = image?.public_id;
        image = image?.secure_url;
    } else {
        image = req.body.image
    }



    const user = await User.create({
        name, email, password, phone, authorization, image, cloudinary_id
    })


    if (user) {
        res.json({
            message: "successfully Create user",
            status: 200,
            result: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                image: user.image,
                password: user.password,
                authorization: user.authorization,
                token: generateToken(user.id)
            }
        });
    } else {

        res.json({ status: 422, message: "User not found" });
    }
})


// ======================== Login  ================================ //


const login = asyncHandle(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.json({ status: 422, message: "Please Enter all the Feilds" });
    }

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            message: "successfully Login",
            status: 200,
            result: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                image: user.image,
                password: user.password,
                authorization: user.authorization,
                token: generateToken(user.id)
            }
        })
    } else {
        res.json({
            message: "Invalid Email or Password",
            status: 401,
        });
    }
})


// =======================================   search    ===================================================== //


const search = asyncHandle(async (req, res) => {
    const name = req.body.name;

    if (!name) {
        const users = await User.find()
        res.json({ status: 200, massage: "No User", result: users })
    } else {
        const user = await User.find({ name })
        res.json({
            massage: "successfully Search",
            status: 200,
            result: user,
        })
    }
})


// =======================================   Delete    ===================================================== //

const deleteUser = asyncHandle(async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id)

    if (user) {
        let public_id = user.cloudinary_id === null ? "null" : user.cloudinary_id?.replace('Chat/users/g', '')
        await cloudinary.uploader.destroy(public_id).then((res) => {
            imageUrl = res
        });
        await User.findByIdAndRemove(id)
        res.json({ status: 200, message: "Successfully Delete" })
    } else {
        res.json({ status: 202, massage: "No Users Found" });
    }
})


// =======================================   Edit    ===================================================== //

const EditUser = asyncHandle(async (req, res) => {
    const id = req.params.id;
    const { name, email, password, phone, authorization } = req.body
    const user = await User.find({ id })
    if (user) {
        console.log(name)
    }

})

// =======================================   Single    ===================================================== //

const singleUser = asyncHandle(async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id)
    if (user) {
        res.json({ massage: "successfully user", status: 200, result: user })
    }else{
        res.json({ status: 202, massage: "No Users Found" });
    }
})

module.exports = { getAllUsers, register, login, search, deleteUser, EditUser, singleUser }