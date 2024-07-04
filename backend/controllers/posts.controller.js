const postsService = require('../services/posts.service')

const postsController = {
    getPostById: async (req, res) => {
        console.log("GET Post by id controller")
        const postId = req.params.id
        console.log(postId)
        const postObj = await postsService.getPostById(postId)
        res.status(200).send(postObj)
    },
    getPosts: async (req, res) => {
        console.log("GET Posts controller")

        const postsObj = await postsService.getPosts();
        res.status(200).send(postsObj)
    },
    createPost: async (req, res) => {
        console.log('POST Posts controller')
        const postToBeCreated = req.body;
        if (!postToBeCreated ||
            !postToBeCreated?.title ||
            !postToBeCreated?.author
        ) {
            res.status(400).send("Invalid post object!")
            return
        }

        postsService.createPost(postToBeCreated)
        res.status(201).send("Post created successfully!")
    },
    deletePost: async (req, res) => {
        console.log("DELETE Posts controller")
        const postId = req.params.id
        await postsService.deletePost(postId)
        res.status(200).send(`Deleted post with id equal to ${postId}!`)
    },
    updatePostLikes: async (req, res) => {
        console.log("PATCH Post controller")
        const postId = req.params.id;
        const username = req.body.username;

        if (!username) {
            res.status(400).send();
            return;
        }

        const postObj = await postsService.getPostById(postId);
        if (!postObj) {
            res.status(404).send();
            return;
        }

        const likes = postObj.likes;

        if (likes.includes(username)) {
            await postsService.removePostLikes(postId, username);
        } else {
            await postsService.addPostLikes(postId, username);
        }
        const updatedPostObj = await postsService.getPostById(postId);

        res.status(200).send(updatedPostObj)
    }
}

module.exports = postsController