const router = require("express").Router();
const User = require("../models/User")
const Posts = require("../models/Posts")

//Create Post

router.post("/", async (req, res) => {

    const newPost = new Posts(req.body)
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    }catch(error){
        res.status(500).json(error)
    }
})

//Upate Post


router.put("/:id", async (req, res) => {

    try{
        
        const post = await Posts.findById(req.params.id)
        if(post.username===req.body.username){

            try{
                const updatedPost = await Posts.findOneAndUpdate(req.params.id, {
                    $set : req.body
                },{new:true})
                res.status(200).json(updatedPost)
            }catch(error){
                res.status(500).json(error)   
            }
        }else{
            res.status(401).json("You can update only your post")
        }

    }catch(error){
        res.status(500).json(error)
    }


})

// Delete Post


router.delete("/:id", async (req, res) => {

    try{
        
        const post = await Posts.findById(req.params.id)
        if(post.username===req.body.username){

            try{
                await post.deleteOne();
                res.status(200).json("Post has been deleted")
            }catch(error){
                res.status(500).json(error)   
            }
        }else{
            res.status(401).json("You can delete only your post")
        }

    }catch(error){
        res.status(500).json(error)
    }

})

//Get post

router.get("/:id", async(req,res)=>{
    try{
        const post = await Posts.findById(req.params.id)
        res.status(200).json(post)

    }catch(error){
        res.status(500).json(error)
    }
})

//Gate all Posts

router.get("/", async(req,res)=>{

    const username = req.query.user
    const catname = req.query.cat
    try{
        let posts;
        if(username){
            posts = await Posts.find({username})
        }else if(catname){
            posts = await Posts.find({categories:{
                $in : [catname]
            }})
        }else{
            posts = await Posts.find()
        }
        res.status(200).json(posts)

    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router