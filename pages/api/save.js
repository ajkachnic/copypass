const dotenv = require('dotenv').config();
const loginSchema = require('../../models/Login');

import connectToDatabase from './db'

export default async (req, res) => {
    await connectToDatabase()
    function generateCode() {
        return Math.floor(100000 + Math.random() * 900000)
    }
    const login = new loginSchema({
        name: req.query.name,
        username: req.query.username,
        password:req.query.password,
        sessionCode: generateCode()
    })
    
    try {
        await login.save()
        res.json(login);
    }
    catch(err) {
        res.status(500)
    }
};
