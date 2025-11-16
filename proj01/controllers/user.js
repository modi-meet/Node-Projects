const express = require("express");
const router = express.Router();
const User = require("../models/user");

async function getAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User Not Found" });
    }

    return res.json(user);
}

async function updateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ message: "Success" });
}

async function handleDelete(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: "Success" });
}

async function createNewUser(req, res) {
    const body = req.body;

    if (!body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender
    ) {
        return res.status(400).json({ message: "All fields are required..." });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle,
    });

    return res.status(201).json({ message: "User created", id: result._id });
}

module.exports = {
    getAllUsers,
    updateUserById,
    getUserById,
    handleDelete,
    createNewUser,
};
