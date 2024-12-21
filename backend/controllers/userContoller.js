
const bcypt = require('bcrypt');
const User = require('../models/UserSchema');



//Register new user
const registerUser = async (req, res) => {


    let userData = req.body
    console.log(userData);

    const userExists = await User.findOne({ email: userData.email })

    if (userExists) {
        res.send({ message: "User Already Exists" })
    }

    const pass = req.body.password

    const hashedPass = bcypt.hashSync(pass, 10)

    userData = { ...userData, password: hashedPass }
    const newUser = new User(userData)

    try {
        const data = await newUser.save()
        if (data) {
            res.status(201).send({ message: "User created successfully" })
        }
    } catch (error) {
        console.log("error from user controller", error);

    }


}

//login user

const loginUser = async (req, res) => {
    const user = req.body
    const isExist = await User.findOne({ email: user.email })

    if (!isExist) {
        res.status(404).send({ message: "User Not Found" })
    }

    const validpass = bcypt.compareSync(user.password, isExist.password)

    if (!validpass) {
        res.status(401).send({ message: "Unauthorized User" })
    }

    const { password, ...rest } = isExist._doc

    res.status(200).send({ message: "Login Success", user: rest })
}


module.exports = { registerUser, loginUser }