const express = require('express');
const User = require('../models/user');

module.exports = {
    async index(req, res){
        const users = await User.find();
        return res.json(users); 
    }
};