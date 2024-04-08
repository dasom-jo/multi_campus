const Post = require("../models/post");

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll({});
        res.json({
            code: 200,
            payload: posts
        })

    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.uploadPost = async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            img: req.body.url,
            UserId: req.body.userId
        });
        res.json({
            code: 200,
            payload: post
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}