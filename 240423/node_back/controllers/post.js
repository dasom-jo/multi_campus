
const { Post, Hashtag  ,User} = require('../models');
const op =require('sequelize').Op;

exports.getPosts =async (req, res, next) =>{
    //query string 은 req.query에 잇다
    // res.json({
    //     code:200,
    //     query:req.query
    // })
    try {
        let posts = [];
        //해시태그조회라면
        if (req.query.hashtag) {
            const hashtag = await Hashtag.findOne({ where: { title: req.query.hashtag } })
            if (hashtag) {
                posts = await hashtag.getPosts({
                    include: [{
                        model: User,
                        attributes: ["id", "nickname"]
                    }]
                });
        }
    } else {
        //사용자아이디조회라면
        posts = await Post.findAll({
            where: { userId: req.query.userid || {[op.ne] : null}},
            include: {
                model: User,
                attributes: ["id", "nickname"]
            },
            order: [
                ["createdAt", "DESC"]
            ]
        });
        }
            res.json({
                code: 200,
                payload: posts
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
}
//수정하기
exports.uploadPost = async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content ,
            img: req.body.img,
            UserId:req.user.id
        });
        //해시태그가 포함되어있다면 배열로 가져온다
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if(hashtags) {
            //해시태그에 샵을뺴고 디비에 넣는법
            const result = await Promise.all(
                hashtags.map((tag)=>{
                    return Hashtag.findOrCreate({
                        where : { title: tag.slice(1).toLowerCase() }
                    });
                })
            );
            //포스트와 해시태그연결
            await post.addHashtags(result.map((r)=>r[0]))
        }

        res.json({
            code:200,
            payload: post
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}


exports.uploadImg = (req,res) =>{
    //이미지 받아오기
    res.json({
        img: `/uploads/${req.file.filename}`
    })
}

exports.modifyPost= async(req,res,next)=>{
    try{
        await Post.update({
            content: req.body.content,
            img:req.body.img
        },{
                where: {id: req.params.id}
            });
            const post = await Post.findOne({
                where: {
                    id: req.params.id
                },
                include: {
                    model: User,
                    attributes: ['id',"nickname"]
                }
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if(hashtags) {
            //해시태그에 샵을뺴고 디비에 넣는법
            const result = await Promise.all(
                hashtags.map((tag)=>{
                    return Hashtag.findOrCreate({
                        where : { title: tag.slice(1).toLowerCase() }
                    });
                })
            );
            //포스트와 해시태그연결
            await post.addHashtags(result.map((r)=>r[0]))
        }
        res.json({
            code:200,
            payload: post
        })
    } catch(err){
        console.error(err);
        next(err)
    }
}


exports.deletePost= async(req,res,next)=>{
    try{
        await Post.destroy({
            where:{ id: req.paras.id }
        });
        res.json({
            code:200,
            message:'게시글이 삭제되었습니다'
        })
    } catch(err){
        console.error(err);
        next(err)
    }
}

