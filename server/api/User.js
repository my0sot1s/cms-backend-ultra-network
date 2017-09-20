import Model, { register, login } from '../models/User'
const router = require("express").Router()
import jwt from 'jsonwebtoken';
const cst = require("../utils/constants");
//ex:http://localhost:3001/api/stories?limit=2&page=2
router.post('/login', function (req, res) {
    const { username, password } = req.body;
    login(username, password, function (err, isLogin, user) {
        if (err || !isLogin) res.status(201).json({ err });
        jwt.sign({ username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, function (err, token) {
            res.status(200).json({ login: "success", username, token });
        })
    })
})
router.post('/register', function (req, res) {
    const { username, password, email } = req.body;
    register({ username, password }, function (err, user) {
        if (err) res.status(201).json({ err });
        jwt.sign({ username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, function (err, token) {
            res.status(200).json({ login: "success", username, token });
        })
    })
})

export default router