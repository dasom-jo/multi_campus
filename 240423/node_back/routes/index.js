const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const postRouter = require('./post');
const { createToken, join } = require('../controllers/auth');
const { verifyToken } = require("../middlewares");

// POST /v1/auth/join
router.post('/auth/join', join);

// POST /v1/auth/login
router.post('/auth/login', createToken);

// /v1/users
router.use('/users', verifyToken, userRouter);

router.use('/posts', postRouter);

module.exports = router;