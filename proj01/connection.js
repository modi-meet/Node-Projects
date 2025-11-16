const express = require('express');
const mongoose = require('mongoose');
const { app } = require('.');

async function connectMongoDb(url) {
    // Connection
    return mongoose.connect(url);
}

module.exports = ({
    connectMongoDb,
})