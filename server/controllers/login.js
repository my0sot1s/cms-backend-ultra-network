import passport from 'passport'
const router = require("express").Router();
import * as User from "../models/mongo/User"
import jwt from 'jsonwebtoken';
const cst = require("../utils/constants");

router.post("/register", (req, res, next) => {

});
router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login-app", (req, res, next) => {
    const { username, password } = req.body;
    User.login(username, password, (err, isLogin, user) => {
        if (err || !isLogin) res.status(201).json({ err });
        jwt.sign({ username, date: Date.now() }, cst.STATIC_SECRET_TOKEN, { expiresIn: '1h' }, (err, token) => {
            res.status(200).json({ username, token });
        })
    })
});

router.post("/login", passport.authenticate('local'
    , {
        failureRedirect: '/dashboard/login',
        successRedirect: '/dashboard'
    })
);
router.get("/logout", (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/dashboard/login');
    });
})

export default router;