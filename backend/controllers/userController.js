const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const addUser = asyncHandler(async (req, res) => {
    const { name, score, prize, rank } = req.body;

    if(!name || !score || !prize || !rank){
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    const user = await User.create({
        name, score, prize, rank
    });

    if (user) {
        const { name, score, prize, rank } = user;
        res.status(201).json({
            name, score, prize, rank
        });
      } else {
        res.status(400);
        throw new Error("Invalid User Data");
      }
})

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})

module.exports = {
    addUser,
    getUsers
}