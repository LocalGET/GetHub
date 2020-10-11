const express = require('express');
const User = require('../models/user');

module.exports = {
    async register(req, res){
        const { email } = req.body;
        try{
            if (await User.findOne({ email }))
                return res.status(400).send({ error: 'Usuario ja existente' });

            const user = await User.create(req.body)

            return res.send({ user});
        } catch (err){
            return res.status(400).send({error: 'Falha no registxxro'});
        }
    }
};