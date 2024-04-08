const Post = require("../models/post");
const User = require("../models/user");
const Hashtags = require("../models/hashtag");

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ["id", "nickname"],
            },
            order : [["createAt", "DESC"]]
        });
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
        const hashtags = req.body.content.match(/#[^\s#]*/g)
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map(tag=> {
                    return Hashtags.findOrCreate({
                        where: {
                            title: tag.slice(1).toLowerCase()
                        }
                    });
                })
            );
            await post.addHashtags(result.map(r=>r[0]));
        }
        res.json({
            code: 200,
            payload: post
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}